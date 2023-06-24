import Navigation from "../components/Fragments/Navigation";
import Footer from "../components/Fragments/Footer";
import Button from "../components/Elements/Button";
import { axiosInstance } from "../lib/axios";
import { useState } from "react";
import React from "react";
import { Fragment } from "react";
import Languange from "../components/Fragments/Languange";
import News from "../components/Fragments/News";

const FindTopicNewsPage = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState({
    text: "",
    num_topics: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setButtonClicked(true);
      setTimeout(async () => {
        const response = await axiosInstance.post("/topic-modeling", {
          text: input.text,
          num_topics: input.selectedOption,
        });

        setResult(response.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const TopicKeywords = ({ keywords }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {keywords.map((keywordGroup, index) => (
          <Fragment key={index}>
            {keywordGroup.map((keyword, i) => (
              <span
                key={i}
                className="inline-block px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    );
  };

  const data = {
    topic_keywords: [
      ["pencarian", "erasikan", "jarak", "lokasi", "rov"],
      ["kapal", "selam", "detik", "titanic", "laut"],
    ],
  };

  return (
    <>
      <Navigation />
      <Languange />
      <div className="container mx-auto">
        <h2 className="font-bold ml-14 text-3xl mb-6 ">Find Topic of News</h2>
        <div className="grid lg:grid-cols-2 gap-5 mx-10">
          <form onSubmit={handleSubmit}>
            <div className="">
              <textarea
                type="text"
                className="text-md border border-gray-500 rounded h-[50vh] w-full py-2 px-3 placeholder: mb-4"
                placeholder="Put your news here"
                value={input.text}
                onChange={(e) => setInput({ text: e.target.value })}
                onKeyDown={handleKeyPress}
                name="text"
              />
              <div className="flex my-2 justify-between items-center">
                <label
                  htmlFor="numberOptions"
                  className="text-lg font-medium mb-2"
                >
                  Which keyword to find:
                </label>
                <select
                  id="numberOptions"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none mr-2"
                >
                  <option value="">
                    {selectedOption ? "Select Option" : "Select Option"}
                  </option>
                  <option value="1">4</option>
                  <option value="2">8</option>
                  <option value="3">12</option>
                  <option value="4">16</option>
                  <option value="5">20</option>
                </select>
              </div>

              <Button variant="bg-blue-700">
                {loading ? "Loading..." : "Find Your Topic"}
              </Button>
            </div>
          </form>
          <div className=" p-4 text-center h-[50vh] ">
            {buttonClicked && !loading && (
              <div className="container mx-auto py-4 ">
                <h1 className="text-4xl font-bold mb-5">Topic Keywords</h1>
                <TopicKeywords keywords={result.topic_keywords} />
              </div>
            )}
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default FindTopicNewsPage;
