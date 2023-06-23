import Navigation from "../components/Fragments/Navigation";
import Footer from "../components/Fragments/Footer";
import FormPredict from "../components/Fragments/FormPredict";
import Button from "../components/Elements/Button";

import React from "react";

const FindTopicNews = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <h2 className="font-bold ml-14 text-3xl mb-6 ">Find Topic News</h2>
        <div className="grid lg:grid-cols-2 gap-5 mx-10">
          <div className="">
            <FormPredict />
            <Button variant="bg-blue-700">Predict</Button>
          </div>
          <div className=" ">
            <textarea
              type="text"
              className="text-md border border-gray-500 rounded h-[50vh] w-full py-2 px-3 placeholder: mb-4"
              placeholder="Hasil Ringkasan "
            ></textarea>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindTopicNews;
