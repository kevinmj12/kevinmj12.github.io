import "./information.css";
import {
  SiGithub,
  SiTistory,
  SiFlutter,
  SiDart,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiAndroid,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";

export default function Inforamtion() {
  return (
    <div className="information-container">
      <div style={{ width: "50%", minWidth: "300px" }}>
        <p className="information-title">기본 정보</p>
        <div className="information-box">
          <MdOutlineEmail />
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
          <SiTistory />
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
        <p className="information-title">기술 스택</p>
        <div className="information-box">
          <div className="inforamtion-stack">
            <SiReact /> <p>React</p>
          </div>
          <div className="inforamtion-stack">
            <RiNextjsFill /> <p>Next.js</p>
          </div>
          <div className="inforamtion-stack">
            <SiAndroid /> <p>Android</p>
          </div>
          <div className="inforamtion-stack">
            <SiFlutter /> <p>Flutter</p>
          </div>
        </div>
        <div className="information-box">
          <div className="inforamtion-stack">
            <SiJavascript /> <p>JavaScript</p>
          </div>
          <div className="inforamtion-stack">
            <SiTypescript /> <p>TypeScript</p>
          </div>
          <div className="inforamtion-stack">
            <SiKotlin /> <p>Kotlin</p>
          </div>
          <div className="inforamtion-stack">
            <SiDart /> <p>Dart</p>
          </div>
        </div>
        <div className="information-box">
          <div className="inforamtion-stack">
            <SiCplusplus /> <p>C++</p>
          </div>
          <div className="inforamtion-stack">
            <FaJava /> <p>Java</p>
          </div>
          <div className="inforamtion-stack">
            <SiPython /> <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
}
