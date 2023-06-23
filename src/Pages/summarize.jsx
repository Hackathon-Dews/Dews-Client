import Navigation from "../components/Fragments/Navigation";
import Footer from "../components/Fragments/Footer";
import Button from "../components/Elements/Button";
import { axiosInstance } from "../lib/axios";
import { useState } from "react";
import React from "react";
import { Fragment } from "react";
import Languange from "../components/Fragments/Languange";

const SummarizePage = () => {
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
        const response = await axiosInstance.post("/summarize", {
          news: input.text,
          num_sentences: input.num_sentences,
        });

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
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // contoh data
  const data = {
    sentences: 2,
    summary:
      "Sebuah kapal selam yang terpasang pada kapal Kanada Horizon Arktik mencapai dasar lSeg dirancang untuk penyelamatan kapal selam angkatan laut tidak bisa mendekati sedalam yang diperlukan.Misi pecarian besar-besaran kemudian dilakukan dengan memperluas area pencarian hingga dua Baca artikel detiknews, 9 Fakta Ledakan Dahsyat Kapal Selam Titanic Tewaskan Semua Penumpangselengkapnyahttps://news.detik.com/berita/d-6789441/9-fakta-ledakan-dahsyat-kapal-selam-titanic-tewaskan-semua-penumpang.ownload Apps Detikcom Sekarang https://apps.detik.com/detik/",
  };

  return (
    <>
      <Navigation />
      <Languange />

      {/* main */}
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 mx-10">
          <div className="">
            <h2 className="font-bold ml-14 text-3xl mb-6 ">Summarize Text</h2>
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
                <div className="flex my-2 justify-between items-center">
                  <label
                    htmlFor="numberOptions"
                    className="text-lg font-medium mb-2"
                  >
                    Which sentences to find:
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
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <Button variant="bg-blue-700">
                  {loading ? "Loading..." : "Find Your Topic"}
                </Button>
              </div>
            </form>
          </div>

          <div className="">
            <h2 className="font-bold ml-14 text-4xl mb-5 ">Summary</h2>
            {/* {buttonClicked && !loading && ( */}

            <div className="border border-slate-600 p-4  min-h-[50vh] max-h-[50vh] rounded overflow-y-auto">
              <h3 className="font-bold mb-3">Sentences : {data.sentences}</h3>
              <p>{data.summary}</p>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SummarizePage;
