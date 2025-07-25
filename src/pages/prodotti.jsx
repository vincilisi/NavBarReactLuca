import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import SectionCards from "../components/card";
import prodotti from '../../mockData/prodotti.json';
import categorySelection from "../utils/categori-selection";

const Prodotti = () => {
    const [cards, setCards] = useState([]);
    const { name } = useParams();
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        const categoria = categorySelection(name);
        const risultati = prodotti.filter(card =>
            categoria?.includes(card.category)
        );
        setCards(risultati);
    }, [name]);

    return (
        <>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <SectionCards cards={cards} />
        </>
    );
};

export default Prodotti;
