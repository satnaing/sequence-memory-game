const Button = ({ children, cname }) => {
  return (
    <button
      className={`bg-primary hover:bg-primary-100 shadow-lg text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 w-40 h-10 text-2xl rounded-sm ${cname}`}
    >
      {children}
    </button>
  );
};

//<button className="bg-primary hover:bg-primary-100 text-2xl shadow-lg rounded-sm text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 w-40 h-10 sm:w-24 sm:h-7 sm:text-lg"></button>
//<button className="bg-primary hover:bg-primary-100 text-2xl shadow-lg rounded-sm text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 w-40 h-10 sm:invisible "></button>
//      bg-primary hover:bg-primary-100 shadow-lg text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 invisible sm:visible absolute right-0 w-8 h-8 rounded-full
//      bg-primary hover:bg-primary-100 shadow-lg text-secondary focus:outline-none focus:ring-1 focus:ring-primary-100 focus:ring-opacity-50 text-2xl rounded-sm w-40 h-10

export default Button;
