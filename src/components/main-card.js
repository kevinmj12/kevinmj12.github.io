import "./main-card.css";
import { Link } from "react-router-dom";

export default function MainCard(props) {
  return (
    <Link to={props.url}>
      <div className="card">
        <img className="card-image" src={props.imageUrl} alt={props.name} />
        <div className="card-txt">
          <p className="card-name">{props.name}</p>
          <p className="card-description">{props.description}</p>
          <div className="card-stacks">
            {props.stacks.map((Value, index) => (
              <span key={index}>
                <Value />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
