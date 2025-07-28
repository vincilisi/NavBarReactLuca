import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './search.css'

const SearchButtonWithInput = () => {
    const [showInput, setShowInput] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const doSearch = () => {
        const trimmed = query.trim().toLowerCase();
        if (!trimmed) return;

        if (["cola", "coca", "coca-cola", "fanta", "sprite", "pepsi"].some(str => trimmed.includes(str))) {
            navigate(`/app/prodotti/beverage?query=${encodeURIComponent(trimmed)}`);
        } else if (["burger", "hamburger", "mc", "big mac", "panino"].some(str => trimmed.includes(str))) {
            navigate(`/app/prodotti/burgers?query=${encodeURIComponent(trimmed)}`);
        } else if (["gelato", "dessert", "torta", "dolce", "icecream"].some(str => trimmed.includes(str))) {
            navigate(`/app/prodotti/dessert?query=${encodeURIComponent(trimmed)}`);
        } else {
            navigate(`/app/prodotti?query=${encodeURIComponent(trimmed)}`);
        }

        // Dopo la ricerca, nascondi il campo e resetta
        setShowInput(false);
        setQuery("");
    };

    const handleClick = () => {
        if (!showInput) {
            setShowInput(true);
        } else if (query.trim()) {
            doSearch();
        } else {
            setShowInput(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setShowInput(false);
            setQuery("");
        } else if (e.key === "Enter") {
            doSearch();
        }
    };

    // Chiudi se clic fuori
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowInput(false);
                setQuery("");
            }
        };

        if (showInput) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showInput]);

    // Focus automatico
    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    return (
        <div className="search-container" ref={containerRef}>
            {showInput && (
                <input
                    type="text"
                    ref={inputRef}
                    className="search-input"
                    placeholder="Cerca prodotto..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            )}
            <button onClick={handleClick} aria-label="Search" className="search-button">
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchButtonWithInput;
