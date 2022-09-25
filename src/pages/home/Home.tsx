import HomeAdvice from "./HomeAdvice";
import HomePreview from "./HomePreview";
import React from "react";

const Home: React.FC = () => {

    return (
        <div className="home">
            <HomePreview/>
            <HomeAdvice/>
        </div>
    );
};

export default Home;
