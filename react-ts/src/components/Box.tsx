import { ReactNode } from "react";

type PropsType = {
  heading: string;
  func1: (a: string) => void;
  children: ReactNode;
};

const Box = ({ heading, func1, children }: PropsType) => {
  func1("Hey there!");
  return (
    <div>
      <h2>Hello, {heading}</h2>
      {children}
    </div>
  );
};

export default Box;
