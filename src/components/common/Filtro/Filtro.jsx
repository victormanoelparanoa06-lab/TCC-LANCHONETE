// Css
import './Filtro.css';

// Images
import CloseIcon from '@/assets/images/icons/close.png';

function Filtro ({ filtro, setFiltro, setDivFiltro, claro }) {
    return (
        <div className={claro ? 'divinputradioclaro' : 'divinputradioescuro'}>
            <img 
                src={CloseIcon} 
                alt="" 
                className='closeicon'
                onClick={() => setDivFiltro(false)} 
            />

            <p>Filtro atual: <b>{filtro}</b></p>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Todos"
                    checked={filtro === "Todos"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Todos
            </label>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Lanches"
                    checked={filtro === "Lanches"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Lanches
            </label>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Frituras"
                    checked={filtro === "Frituras"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Frituras
            </label>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Massas"
                    checked={filtro === "Massas"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Massas
            </label>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Doces"
                    checked={filtro === "Doces"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Doces
            </label>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Frutas"
                    checked={filtro === "Frutas"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Frutas
            </label>

            <label htmlFor="" className="labelfiltro">
                <input
                    type="radio"
                    name="filtro"
                    id=""
                    value="Bebidas"
                    checked={filtro === "Bebidas"}
                    onChange={(e) => setFiltro(e.target.value)}
                    onClick={() => setDivFiltro(false)} 
                />
                Bebidas
            </label>
        </div>
    )
}

export default Filtro;