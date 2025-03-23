"use client";
import React, { createContext, useContext, useState } from "react";

const Context = createContext(undefined);

export const Provider = ({ children }) => {
  const [favouriteNews, setfavouriteNews] = useState([]);
  const handleFavClick = (article) => {
    setfavouriteNews((prevState) => [...prevState, article]);
  };
  const handleFavDeleteClick = (index) => {
    let deltedArray = [...favouriteNews];
    deltedArray.splice(index, 1);
    setfavouriteNews(deltedArray);
  };

  return (
    <Context.Provider
      value={{
        favouriteNews,
        setfavouriteNews,
        handleFavClick,
        handleFavDeleteClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProviderContext = () => {
  return useContext(Context);
};
