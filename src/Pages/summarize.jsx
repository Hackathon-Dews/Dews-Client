import Navigation from "../components/Fragments/Navigation";
import Footer from "../components/Fragments/Footer";
import FormPredict from "../components/Fragments/FormPredict";
import Button from "../components/Elements/Button";
import Loader from "../components/Elements/Loader";

import React from "react";

const SummarizePage = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <h2 className="font-bold ml-14 text-3xl mb-6 ">Summarize Text</h2>
        <div className="grid lg:grid-cols-2 gap-5 mx-10">
          <div className="">
            <FormPredict  />
          </div>
          <div className=" ">
           
          </div>

       
          <Button variant="bg-blue-700" type="submit">
            Hoax/True
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SummarizePage;
