import "./Main.css";
import MainCard from "./components/main-card";
import damyoImage from "./libs/images/damyo.png";
import pofoImage from "./libs/images/pofo.png";
import foreignKookminImage from "./libs/images/foreign-kookmin.png";

function Main() {
  return (
    <div>
      <div className="container">
        <p className="title">포트폴리오 - 김민제</p>
        <div className="card-container">
          <MainCard
            name={"담요"}
            description={"흡연구역 안내 서비스, 담요"}
            imageUrl={damyoImage}
            url="/damyo"
          />
          <MainCard
            name={"포포"}
            description={"개발자 토이프로젝트 공유 웹사이트"}
            imageUrl={pofoImage}
            url="/pofo"
          />
          <MainCard
            name={"외국민"}
            description={"외국인 유학생들을 위한 서비스앱"}
            imageUrl={foreignKookminImage}
            url="/foreignkookmin"
          />
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

export default Main;
