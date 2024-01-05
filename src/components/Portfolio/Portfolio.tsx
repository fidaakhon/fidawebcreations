import React from "react";
import NextJsCarousel from "./Caraousal";

const Portfolio = () => {
    return (
        <div className="portfolio mt-16">
            <h1 className="text-center text-3xl font-bold">Portfolio</h1>
            <p className="text-center text-sm text-gray-500">Most recent work</p>
            <NextJsCarousel />
        </div>
    );
}

export default Portfolio;