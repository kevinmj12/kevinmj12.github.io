import "./main-card.css";

export default function MainCard(props) {
  return (
    <div class="card">
      <a href="./projects/damyo.html">
        <img class="card-img" src={props.imageUrl} alt={props.name} />
        <div class="card-txt">
          <p class="card-name">{props.name}</p>
          <p class="card-description">{props.description}</p>
        </div>
      </a>
    </div>
  );
}
