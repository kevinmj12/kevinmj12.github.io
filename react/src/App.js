import "./App.css";
import MainCard from "./components/main-card";
import damyoImage from "./libs/images/damyo.png";
import pofoImage from "./libs/images/pofo.png";
import foreignKookminImage from "./libs/images/foreign-kookmin.png";

function App() {
  return (
    <div class="container">
      <p class="title">포트폴리오 - 김민제</p>
      <div class="card-container">
        <MainCard
          name={"담요"}
          description={"흡연구역 안내 서비스, 담요"}
          imageUrl={damyoImage}
        />
        <MainCard
          name={"포포"}
          description={"개발자 토이프로젝트 공유 웹사이트"}
          imageUrl={pofoImage}
        />
        <MainCard
          name={"외국민"}
          description={"외국인 유학생들을 위한 서비스앱"}
          imageUrl={foreignKookminImage}
        />
      </div>
    </div>
  );
}

export default App;
