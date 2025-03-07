import damyoImage from "../libs/images/damyo.png";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { SiGithub, SiYoutube, SiGoogleplay } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ScrollToTop from "../scroll-to-top";

export default function Damyo() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); //뒤로가기
  };

  const images = [
    {
      original: "/damyo/damyo-slide1.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-slide1.png",
    },
    {
      original: "/damyo/damyo-slide2.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-slide2.png",
    },
    {
      original: "/damyo/damyo-slide3.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-slide3.png",
    },
    {
      original: "/damyo/damyo-slide4.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-slide4.png",
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
          <img alt="담요" className="project-img" src={damyoImage} />
          <p className="project-title">담요 - 담배는 요기서</p>
          <p className="project-description">흡연구역 정보제공 애플리케이션</p>
          <div className="project-index">🔗 링크</div>
          <div className="project-link">
            <SiGithub style={{ minWidth: "20px" }} />
            <a
              href="https://github.com/Alpha-Damyo"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Alpha-Damyo
            </a>
          </div>
          <div className="project-link">
            <SiYoutube style={{ minWidth: "20px", color: "red" }} />
            <a
              href="https://www.youtube.com/watch?v=5wS-LDVArWY"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=5wS-LDVArWY
            </a>
          </div>
          <div className="project-link">
            <SiGoogleplay style={{ minWidth: "20px", color: "green" }} />
            <a
              href="https://play.google.com/store/apps/details?id=com.damyo_app"
              target="_blank"
              rel="noreferrer"
            >
              https://play.google.com/store/apps/details?id=com.damyo_app
            </a>
          </div>
          <div className="project-index">⭐ 소개</div>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={true}
          />
          <div style={{ lineHeight: "normal" }}>
            <p>담요는 흡연구역 정보를 제공해주는 모바일 애플리케이션입니다.</p>
            <p>
              흡연자들이 길거리가 아닌 흡연구역에서 흡연을 하는 올바른
              흡연문화를 만들기 위하여 이 앱을 제작하게 되었습니다.
            </p>
            <p>
              사용자는 본인 근처에 있는 흡연구역들을 쉽게 확인할 수 있고 검색할
              수 있으며, 흡연 관련 통계를 제공받고 확인할 수 있습니다.
            </p>
            <p>
              이외에도 흡연구역 제보, 리뷰, 즐겨찾기 등의 기능을 통해 앱을
              편리하게 사용할 수 있습니다.
            </p>
          </div>

          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>Flutter, Dart, SQLite</li>
          <li>Naver Map, Naver Auth, Google Auth </li>
          <li>provider, sqflite, geolocator, flChart</li>

          <div className="project-index">🛠️ 역할</div>
          <li style={{ fontSize: "20px" }}>프로젝트 팀장</li>
          <ol style={{ listStyleType: "inherit" }}>
            <li>
              {" "}
              프로젝트를 기획하고 팀장을 맡아 팀원들을 모집하고 개발을
              이끌었습니다.
            </li>
            <li>
              {" "}
              매주 오프라인 회의를 주도하여 진행 상황을 공유하고 다음 주까지
              개발할 내용을 정해주었습니다.
            </li>

            <li>
              {" "}
              프로젝트 예산 및 지원금을 관리하였으며 관련 서류들을
              처리하였습니다.
            </li>
          </ol>
          <li style={{ fontSize: "20px" }}>프론트엔드 개발</li>
          <ol style={{ listStyleType: "inherit" }}>
            <li> 네이버지도 API를 사용하여 흡연구역 지도를 구현하였습니다.</li>
            <li>
              {" "}
              흡연구역 검색, 제보, 리뷰, 즐겨찾기 등의 흡연구역 관련 기능을
              구현하였습니다.
            </li>
            <li> 구글 로그인 기능을 구현하였습니다.</li>
            <li> 구글 플레이스토어에 배포를 완료하였습니다.</li>
          </ol>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
