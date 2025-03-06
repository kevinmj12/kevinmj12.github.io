import foreignkookminImage from "../libs/images/foreign-kookmin.png";
import "./projects.css";

export default function Foreignkookmin() {
  return (
    <div class="container">
      <img alt="외국민" class="project-img" src={foreignkookminImage} />
      <p class="title">외국민</p>
      <p class="description">외국인 유학생들을 위한 서비스앱</p>
    </div>
  );
}
