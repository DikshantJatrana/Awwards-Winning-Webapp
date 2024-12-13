import React from "react";
import Button from "./Button";
import gsap from "gsap";
import Cards from "./Cards";
import Button2 from "./Button2";

function Featured() {
  return (
    <div className="w-full min-h-screen relative py-[5vh] font-montreal">
      <h1 className="px-4 md:px-10 pb-6 border-b border-PrimaryTeal text-4xl md:text-5xl lg:text-6xl">
        Featured Projects :
      </h1>
      <div className="px-10 overflow-hidden md:grid md:grid-cols-2 gap-10">
        <Cards
          title={"Cardboard Spaceship"}
          img={"/img/Featured-1.png"}
          left={true}
          buttonArray={[
            "BRANDED PITCH",
            "SALES DECK",
            "SOCIAL MEADIA TEMPLATE",
          ]}
        />
        <Cards
          title={"AH2 & Matt Horn"}
          img={"/img/Featured-2.png"}
          left={false}
          buttonArray={["PITCH DECK"]}
        />
        <Cards
          title={"FYDE"}
          img={"/img/Featured-3.png"}
          left={true}
          buttonArray={["AUDIT", "COPYWRITE", "SLIDE DESIGN", "SALE DECK"]}
        />
        <Cards
          title={"VISE"}
          img={"/img/Featured-4.jpg"}
          left={false}
          buttonArray={["COMPANY PRESENTATION", "AGENCY"]}
        />
      </div>
      <div className="flex justify-center items-center py-5">
        <Button2
          title={"View All case Study"}
          containerClass={"bg-PrimaryGray text-white"}
        />
      </div>
    </div>
  );
}

export default Featured;
