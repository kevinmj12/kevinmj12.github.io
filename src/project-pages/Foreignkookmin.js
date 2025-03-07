import foreignkookminImage from "../libs/images/foreign-kookmin.png";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { SiGithub, SiYoutube, SiGoogleplay } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ScrollToTop from "../scroll-to-top";

export default function Pofo() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const images = [
    {
      original: "/foreignkookmin/fk-slide1.png",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide1.png",
    },
    {
      original: "/foreignkookmin/fk-slide2.png",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide2.png",
    },
    {
      original: "/foreignkookmin/fk-slide3.PNG",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide3.PNG",
    },
    {
      original: "/foreignkookmin/fk-slide4.png",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide4.png",
    },
    {
      original: "/foreignkookmin/fk-slide5.PNG",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide5.PNG",
    },
    {
      original: "/foreignkookmin/fk-slide6.PNG",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide6.PNG",
    },
    {
      original: "/foreignkookmin/fk-slide7.PNG",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide7.PNG",
    },
    {
      original: "/foreignkookmin/fk-slide8.png",
      originalHeight: "600px",
      thumbnail: "/foreignkookmin/fk-slide8.png",
    },
  ];
  return (
    <div>
      <ScrollToTop />
      <div className="project-container">
        <div className="project-box">
          <div className="project-back">
            <IoArrowBack onClick={handleBack} />
          </div>
          <img alt="외국민" className="project-img" src={foreignkookminImage} />
          <p className="project-title">외국민</p>
          <p className="project-description">
            국민대학교 외국인 유학생 정보제공앱
          </p>
          <div className="project-index">🔗 링크</div>
          <div className="project-link">
            <SiGithub style={{ minWidth: "20px" }} />
            <a
              href="https://github.com/kookmin-sw/capstone-2024-30"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/kookmin-sw/capstone-2024-30
            </a>
          </div>
          <div className="project-link">
            <SiYoutube style={{ minWidth: "20px", color: "red" }} />
            <a
              href="https://www.youtube.com/watch?v=IGSK7kev9ks"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=IGSK7kev9ks
            </a>
          </div>
          <div className="project-link">
            <SiGoogleplay style={{ minWidth: "20px", color: "green" }} />
            <a
              href="https://play.google.com/store/apps/details?id=com.foreign.kookmin&pli=1"
              target="_blank"
              rel="noreferrer"
            >
              https://play.google.com/store/apps/details?id=com.foreign.kookmin&pli=1
            </a>
          </div>

          <div className="project-index">⭐ 소개</div>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          <div style={{ lineHeight: "normal" }}>
            <p>
              외국민은 국민대학교 외국인 유학생들을 위한 학교 정보제공 모바일
              애플리케이션입니다.
            </p>
            <p>
              공식 홈페이지에서 외국어를 제공하는 다른 대학교들과 달리
              국민대학교 홈페이지에서는 외국어를 제공하지 않아 제작하게
              되었습니다.
            </p>
            <p>
              한국어, 영어, 중국어 3가지 언어를 사용할 수 있으며 다른 언어들도
              쉽게 추가하여 서비스할 수 있습니다.
            </p>
            <p>
              공지사항, 학식 정보 제공, 게시판, 챗봇 서비스, 발음평가 서비스를
              제공합니다.
            </p>
          </div>

          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>Flutter, Dart, SQLite</li>
          <li>Firebase Auth, Azure Speech API</li>
          <li>easy_localization, flutter_sound, audio_session, record</li>

          <div className="project-index">🛠️ 역할</div>
          <li> 언어 변경 시스템을 구축하고 영어, 중국어를 추가하였습니다.</li>
          <li>
            {" "}
            Firebase Auth를 사용하여 국민대 이메일 인증 및 로그인, 회원가입
            서비스를 구현하였습니다.
          </li>
          <li>
            Azure Sppech API를 사용하여 발음 평가 서비스를 구현하였습니다.
          </li>
          <li> 메인 페이지, 학식 서비스, 챗봇 서비스를 구현하였습니다. </li>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
