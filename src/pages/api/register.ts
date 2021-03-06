import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import mongoose from "mongoose";

import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  /* const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
 */
  /* const db = await mongoose
    .connect(uri, options)
    .then(() => {
      console.log("server on");
    })
    .catch((error) => {
      console.log("Erro:", error);
    });
 */
  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const {
    id,
    name,
    level,
    currentExperience,
    challengesCompleted,
  } = request.body;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  console.log("db", db);

  const collection = db.collection("users");
  console.log("coolection", collection);

  await collection.insertOne({
    id,
    name,
    level,
    currentExperience,
    challengesCompleted,
    created: Date.now(),
  });

  return response.status(201).json({ ok: true });
};
