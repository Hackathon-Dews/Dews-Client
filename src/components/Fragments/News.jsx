import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  // When hit with API
  const fetchData = async () => {
    try {
      const APIkey = "f26df1bfc46040afbb4fa5ec438743a5";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${APIkey}`;
      const response = await axios.get(url);
      setNews(response.data.articles);
      console.log(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold mt-10">
        {" "}
        Similar Articles
      </h1>
      <div className="grid">
        {news.map((news) => (
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="text-2xl font-bold">{news.title}</h1>
              <p className="text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
