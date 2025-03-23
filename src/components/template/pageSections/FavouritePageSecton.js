"use client";
import { useProviderContext } from "@/context/Provider";
import React from "react";
import NewsCard from "../cards/Newscard";

const FavouritePageSecton = () => {
  const { favouriteNews, handleFavDeleteClick } = useProviderContext();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favouriteNews.map((item, index) => {
          return (
            <NewsCard
              key={index}
              article={item}
              showFavIcon={false}
              showDelete={true}
              onFavDelete={() => {
                handleFavDeleteClick(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavouritePageSecton;
