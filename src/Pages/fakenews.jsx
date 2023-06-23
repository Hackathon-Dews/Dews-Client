import Navigation from "../components/Fragments/Navigation";
import Footer from "../components/Fragments/Footer";
import FormPredict from "../components/Fragments/FormPredict";
import Button from "../components/Elements/Button";
import { axiosInstance } from "../lib/axios";
import { useState } from "react";
import React from "react";
import News from "../components/Fragments/News";

const FakeNews = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState({
    news: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setButtonClicked(true);
      setTimeout(async () => {
        const response = await axiosInstance.post("/predict", {
          news: input.news,
        });

        // console.log(response.data);
        setResult(response.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const data = {
    prediction: "Fake News",
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <h2 className="font-bold ml-14 text-3xl mb-6 ">Fake News Detection</h2>
        <div className="grid lg:grid-cols-2 gap-5 mx-10">
          <form onSubmit={handleSubmit}>
            <div className="">
              <textarea
                type="text"
                className="text-md border border-gray-500 rounded h-[50vh] w-full py-2 px-3 placeholder: mb-4"
                placeholder="Put your news here"
                value={input.news}
                onChange={(e) => setInput({ news: e.target.value })}
                onKeyDown={handleKeyPress}
                name="news"
              />
              <Button variant="bg-blue-700">
                {loading ? "Loading..." : "Predict"}
              </Button>
            </div>
          </form>
          <div className="p-4 text-center">
            {/* {buttonClicked && !loading && ( */}
            <div className="container mx-auto py-4 ">
              <h1 className="text-2xl mb-5">Prediction :</h1>
              <div className="">
                <h2 className="text-5xl font-bold ">
                  {/* code asli */}
                  {/* {result.prediction} */}
                  {data.prediction.toUpperCase()}
                </h2>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default FakeNews;
