import damyoImage from "../libs/images/damyo.png";
import "./projects.css";

export default function Damyo() {
  return (
    <div class="container">
      <img alt="담요" class="project-img" src={damyoImage} />
      <p class="title">담요 - 담배는 요기서</p>
      <p class="description">흡연구역 정보제공앱</p>
    </div>
  );
}
