import React from "react";

type Props = {
  children: string | React.ReactElement;
  cname: string;
  handleClick: () => void;
  val?: string;
  title?: string;
};

const Button = ({ children, cname, handleClick, val, title }: Props) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      value={val}
      title={title}
      aria-label={title}
      className={`bg-primary hover:bg-primary-100 shadow-lg text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 w-40 h-10 text-2xl rounded-sm ${cname}`}
    >
      {children}
    </button>
  );
};

export default Button;
