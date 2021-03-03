import ReactLoading, { LoadingType } from "react-loading";

interface SpinnerProps {
  type: LoadingType;
  color: string;
  width: number;
  height: number;
}

export default function Spinner({ type, color, width, height }: SpinnerProps) {
  return (
    <ReactLoading type={type} color={color} width={width} height={height} />
  );
}
