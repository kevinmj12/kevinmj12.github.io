import "./main-card.css";
import { Link } from "react-router-dom";

export default function MainCard(props) {
  return (
    <Link to={props.url}>
      <div className="card">
        <img className="card-img" src={props.imageUrl} alt={props.name} />
        <div className="card-txt">
          <p className="card-name">{props.name}</p>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
