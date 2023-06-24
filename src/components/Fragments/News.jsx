import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import NewsData from "../../data/newsData.json";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);

  // When hit with API
  //   const fetchData = async () => {
  //     try {
  //       const APIkey = "f26df1bfc46040afbb4fa5ec438743a5";
  //       const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${APIkey}`;
  //       const response = await axios.get(url);
  //       setNews(response.data.articles);
  //       console.log(response.data.articles);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  useEffect(() => {
    setNews(NewsData);
  }, []);

  const indexOfLastNews = currentPage * perPage;
  const indexOfFirstNews = indexOfLastNews - perPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-36 my-10 py-5 bg-slate-100">
      <h1 className="text-center text-4xl font-bold mt-10">
        {" "}
        Similar Articles
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 ">
        {currentNews.map((newsItem) => (
          <div className="max-w-sm max-h-[10] rounded overflow-hidden shadow-lg ">
            <img
              src={newsItem.urlToImage}
              className="h-[50%]  w-full "
              alt=""
            />
            <div className="px-6 py-4">
              <a href={newsItem.url}>
                <h1 className="text-2xl font-bold">{newsItem.title}</h1>
              </a>
              <p className="text-sm line-clamp-2 overflow-hidden h-14">
                {newsItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {currentPage > 1 && (
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        )}
        {currentNews.length === perPage && (
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default News;
