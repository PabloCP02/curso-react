import "./Card.css"
import { Link } from "react-router-dom";

// Un componente es una función
function Card({title = "titulo por defecto", description = "descripción por defecto"}){
    return (
        <div className="Card">
            <Link to={title}><h2>{title}</h2></Link>
            <p>{description}</p>
        </div>
    )
}

export default Card;