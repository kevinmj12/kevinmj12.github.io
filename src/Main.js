import "./Main.css";
import MainCard from "./components/main-card";
import damyoImage from "./libs/images/damyo.png";
import pofoImage from "./libs/images/pofo.jpg";
import foreignKookminImage from "./libs/images/foreign-kookmin.png";
import kookbapImage from "./libs/images/kookbap.png";
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiTypescript,
  SiGoogleplay,
  SiAndroid,
  SiPython,
  SiPytorch,
  SiExpress,
} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";
import kimminje from "./libs/images/kimminje.jpg";
import Inforamtion from "./components/information";
import { FaJava, FaNode } from "react-icons/fa";

function Main() {
  return (
    <div>
      <div className="container">
        <div className="main-box">
          <img className="main-image" src={kimminje} alt="kimminje" />
          <div style={{ display: "block" }}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "500",
                margin: "0px 0px 10px",
              }}
            >
              프론트엔드 개발자
            </p>
            <p style={{ fontSize: "33px", fontWeight: "600", margin: "0px" }}>
              김민제
            </p>
            <p>
              새로운 것을 배우고 도전하는 것을 좋아하며
              <br />
              변화하는 최신 기술 트렌드를 빠르게 익히고 적응하는 개발자가 되고
              싶습니다.
            </p>
          </div>
        </div>

        <Inforamtion />
        <p className="information-title">🚀 프로젝트</p>
        <div className="card-container">
          <MainCard
            name={"담요"}
            description={"흡연구역 안내 서비스, 담요"}
            imageUrl={damyoImage}
            url="/damyo"
            stacks={[SiFlutter, SiDart, SiGoogleplay]}
          />
          <MainCard
            name={"포포"}
            description={"개발자 토이프로젝트 공유 웹사이트"}
            imageUrl={pofoImage}
            url="/pofo"
            stacks={[SiReact, RiNextjsFill, SiTypescript]}
          />
          <MainCard
            name={"외국민"}
            description={"국민대학교 외국인 유학생 정보제공앱"}
            imageUrl={foreignKookminImage}
            url="/foreignkookmin"
            stacks={[SiFlutter, SiDart, SiGoogleplay]}
          />
          <MainCard
            name={"국밥"}
            description={"국민대학교 학식 정보제공앱"}
            imageUrl={kookbapImage}
            url="/kookbap"
            stacks={[SiAndroid, FaJava, SiPython, SiPytorch, FaNode, SiExpress]}
          />
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

export default Main;
