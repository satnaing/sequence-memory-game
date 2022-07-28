import React from "react";

type Props = {
  children: React.ReactElement;
  handleClick: () => void;
  title: string;
};

const RoundedButton = ({ children, handleClick, title }: Props) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      title={title}
      aria-label={title}
      className={`bg-primary hover:bg-primary-100 shadow-lg text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50  invisible sm:visible absolute right-0 w-8 h-8 rounded-full`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
