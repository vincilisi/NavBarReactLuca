import { useEffect, useState } from "react";
import useFetch from "../utils/CustomHook/useFetch";
import useWidthScreen from "../utils/CustomHook/useWidthScreen";

const PokemonInfo = () => {
    const [url, setUrl] = useState('');
    const width = useWidthScreen();
    const { data, loading, error } = useFetch(url);

    useEffect(() => {
        let newUrl = '';
        if (width <= 750) {
            newUrl = 'https://pokeapi.co/api/v2/pokemon/charmander';
        } else if (width <= 1000) {
            newUrl = 'https://pokeapi.co/api/v2/pokemon/charmeleon';
        } else {
            newUrl = 'https://pokeapi.co/api/v2/pokemon/charizard';
        }
        if (url !== newUrl) {
            setUrl(newUrl);
        }
    }, [width]);

    if (!url) return null;
    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    const dynamicStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: width > 1000 ? "300px" : "150px",
        marginTop: width > 1000 ? "1rem" : "0.2rem",
        gap: "1rem"
    };

    return (
        <div style={dynamicStyle}>
            {data && (
                <>
                    <h2 style={{ textTransform: "capitalize" }}>{data.name}</h2>
                    <img src={data.sprites.front_default} alt={data.name} />
                </>
            )}
        </div>
    );
};

export default PokemonInfo;
