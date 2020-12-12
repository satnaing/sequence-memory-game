const ColorDiv = ({ color }) => (
  <div
    className={`${color} box-border w-32 h-32 sm:h-44 sm:w-44 p-4 m-5 rounded-xl hover:shadow-2xl cursor-pointer border-2 border-bgcolor2 border-opacity-0 hover:border-opacity-100`}
  />
);

export default ColorDiv;
