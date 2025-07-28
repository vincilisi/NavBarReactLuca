import React from "react";
import { FaReacteurope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./css/intro.css"

const IntroPage = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate("/home");
    };

    return (
        <div className="intro">
            <div className="container">
                <p className="Phome">
                    This application was created by me using only React and is an example
                    of a McDonald's menu.
                </p>
                <FaReacteurope
                    onClick={handleEnter}
                    className="icona-react-europa"
                    title="Entra nel progetto"
                />
            </div>
        </div>
    );
};

export default IntroPage;
