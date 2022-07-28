import React from "react";

type Props = {
  cname: string;
  handleUserInput: (e: any) => void;
  title: string;
};

const ColorDiv = ({ cname, handleUserInput, title }: Props) => (
  <div
    onClick={handleUserInput}
    title={title}
    className={`${cname} box-border w-32 h-32 sm:h-44 sm:w-44 p-4 m-3 sm:m-5 rounded-xl hover:shadow-2xl cursor-pointer border-2 border-bgcolor2 border-opacity-0 hover:border-opacity-100`}
  />
);

export default ColorDiv;
