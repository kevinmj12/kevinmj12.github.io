import pofoImage from "../libs/images/pofo.png";
import "./projects.css";

export default function Pofo() {
  return (
    <div class="container">
      <img alt="외국민" class="project-img" src={pofoImage} />
      <p class="title">포포</p>
      <p class="description">개발자 토이프로젝트 공유 서비스웹</p>
    </div>
  );
}
