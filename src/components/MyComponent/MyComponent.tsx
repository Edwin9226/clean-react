import { type FC } from "react";
import withInnerWidth from "./WithInnerWidth";
export type MyComponentProps = {
  innerWith: number | null;
};

const MyComponent: FC<MyComponentProps> = ({ innerWith }) => {
  console.log("window.innerWidth", innerWidth);
  return <div> innerWith: {innerWidth}</div>;
};

export default withInnerWidth(MyComponent);
