import "./information.css";
import {
  SiGithub,
  SiTistory,
  SiFlutter,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiAndroid,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { RiNextjsFill } from "react-icons/ri";

export default function Inforamtion() {
  return (
    <div className="information-container">
      <div style={{ width: "50%", minWidth: "300px" }}>
        <p className="information-title">📄 기본 정보</p>
        <div className="information-box">
          <LuMail />
          <p>kevinmj12@gmail.com</p>
        </div>
        <div className="information-box">
          <SiGithub />
          <a
            href="https://github.com/kevinmj12"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/kevinmj12
          </a>
        </div>
        <div className="information-box">
          <SiTistory style={{ color: "#FF5A4A" }} />
          <a
            href="https://makeaccident.tistory.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://makeaccident.tistory.com/
          </a>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <p className="information-title">📖 기술 스택</p>
        <div className="information-box">
          <div className="inforamtion-stack">
            <SiReact style={{ color: "#5CC3F0" }} /> <p>React</p>
          </div>
          <div className="inforamtion-stack">
            <RiNextjsFill /> <p>Next.js</p>
          </div>
          <div className="inforamtion-stack">
            <SiAndroid style={{ color: "#35A854" }} /> <p>Android</p>
          </div>
          <div className="inforamtion-stack">
            <SiFlutter style={{ color: "#5CC3F0" }} /> <p>Flutter</p>
          </div>

          <div className="inforamtion-stack">
            <SiJavascript style={{ color: "#EFD81D" }} /> <p>JavaScript</p>
          </div>
          <div className="inforamtion-stack">
            <SiTypescript style={{ color: "#2F74C0" }} /> <p>TypeScript</p>
          </div>
          <div className="inforamtion-stack">
            <SiKotlin style={{ color: "#B41CE1" }} /> <p>Kotlin</p>
          </div>

          <div className="inforamtion-stack">
            <SiCplusplus style={{ color: "#017CC7" }} /> <p>C++</p>
          </div>
          <div className="inforamtion-stack">
            <FaJava style={{ color: "#D4370E" }} /> <p>Java</p>
          </div>
        </div>
      </div>
    </div>
  );
}
