"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "../cards/Newscard";
import MainLoader from "@/components/loader/MainLoader";
import { useProviderContext } from "@/context/Provider";

const HomePage = () => {
  const { handleFavClick } = useProviderContext();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    try {
      setLoading(true);
      const apikey = process.env.NEXT_PUBLIC_GNEWS_API;
      const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=100&apikey=${apikey}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log("data", data);
      setNews(data.articles);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      {loading ? (
        <MainLoader />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
            {news.map((item, index) => {
              return (
                <NewsCard
                  key={index}
                  article={item}
                  onFavClick={() => {
                    handleFavClick(item);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
