import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionCards from "../components/card";
import prodotti from '../../mockData/prodotti.json';
import categorySelection from "../utils/categori-selection";
import '../pages/css/prodotti.css';

const categories = [
    {
        name: "burgers",
        label: "Burgers",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/LeftRail_BurgersPCP_160x160:category-panel-left-desktop"
    },
    {
        name: "beverage",
        label: "Beverage",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/NavImage_Beverages_160x160:category-panel-left-desktop"
    },
    {
        name: "dessert",
        label: "Dessert",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:category-panel-left-desktop"
    }
];

const Prodotti = () => {
    const { name } = useParams();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query")?.toLowerCase() || "";

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const categoria = categorySelection(name);
        let risultati;
        console.log('AAA', categoria)
        if (!categoria) {
            console.log('BBB', name)
            console.log(prodotti)
            risultati = prodotti.filter(card => card.name.toLowerCase().includes(name))
        } else {
            risultati = prodotti.filter(card =>
                categoria?.includes(card.category) &&
                card.name &&
                card.name.toLowerCase().includes(query)
            );
        }



        setCards(risultati);
    }, [name, query]);

    return (
        <div className="prodotti-layout">
            <aside className="sidebar">
                {categories.map(cat => (
                    <Link
                        key={cat.name}
                        to={`/app/prodotti/${cat.name}`}
                        className={`sidebar-item ${name === cat.name ? "active" : ""}`}
                    >
                        <img src={cat.img} alt={cat.label} className="sidebar-img" />
                        <span className="sidebar-label">{cat.label}</span>
                    </Link>
                ))}
            </aside>

            <main className="main-prodotti">
                <h1>{name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Prodotti'}</h1>
                <SectionCards cards={cards} />
            </main>
        </div>
    );
};

export default Prodotti;
