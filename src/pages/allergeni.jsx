import { useReducer } from "react";
import Navbar from "../components/navbar"
import "./css/allergeni.css"
import Allergene from '../../mockData/allergeni.json'

const reducer = (state, action) => {
    switch (action.category) {
        case 'Frutta a guscio':
            return 'Frutta a guscio';
        case 'Crostacei':
            return 'Crostacei';
        case 'Latte':
            return 'Latte';
        case 'reset':
            return;
        default:
            return state;
    };
}
const Allergeni = () => {
    const [categoriaSelezionata, dispatch] = useReducer(reducer, '');
    const allergeniFiltrati = Allergene.filter(
        (item) => item.category === categoriaSelezionata

    );


    return (
        <>
            <div className="CardPadreAll">
                <div className="cardPadretitle">
                    <h2>Allergene selezionato: {categoriaSelezionata}</h2>
                </div>
                <div className="cardButton">
                    <button onClick={() => dispatch({ category: 'Frutta a guscio' })}>Frutta a Guscio</button>
                    <button onClick={() => dispatch({ category: 'Crostacei' })}>Crostacei</button>
                    <button onClick={() => dispatch({ category: 'Latte' })}>Latte</button>
                    <button onClick={() => dispatch({ category: 'reset' })}>Reset</button>
                </div>
            </div>


            {categoriaSelezionata && (
                <div className="cardall">
                    <div className="titolo-card">
                        <h3 className="card-title">Allergeni nella categoria: {categoriaSelezionata}</h3>
                    </div>
                    <div className="card-slid">
                        {allergeniFiltrati.map((item) => (
                            <div className="card-allergeni" key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </>
    )
}
export default Allergeni