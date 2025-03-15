"use client"
import React, { useEffect, useState } from "react";
import NewsCard from "../cards/Newscard";
import MainLoader from "@/components/loader/MainLoader";

const EntertainemntPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    try {
      setLoading(true);
      const apikey = process.env.NEXT_PUBLIC_GNEWS_API;
      console.log("fetch API", apikey)
      const url = `https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&apikey=${apikey}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log("data business", data);
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
              return <NewsCard key={index} article={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EntertainemntPage;