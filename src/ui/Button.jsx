const Button = ({ children, cname, handleClick, val, title }) => {
  return (
    <button
      onClick={handleClick}
      value={val}
      title={title}
      className={`bg-primary hover:bg-primary-100 shadow-lg text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 w-40 h-10 text-2xl rounded-sm ${cname}`}
    >
      {children}
    </button>
  );
};

export default Button;
