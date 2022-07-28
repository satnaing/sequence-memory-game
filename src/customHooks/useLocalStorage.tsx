import React from "react";

const useLocalStorage = (defaultValue: number, key: string) => {
  const [value, setValue] = React.useState(() => {
    const highScore = window.localStorage.getItem(key);

    return highScore !== null ? JSON.parse(highScore) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
