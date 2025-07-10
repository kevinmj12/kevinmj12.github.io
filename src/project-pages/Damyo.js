import damyoImage from "../libs/images/damyo.png";
import { SiGithub, SiYoutube, SiGoogleplay } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ScrollToTop from "../scroll-to-top";

export default function Damyo() {
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
    {
      original: "/damyo/damyo-0.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-0.png",
    },
    {
      original: "/damyo/damyo-1.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-1.png",
    },
    {
      original: "/damyo/damyo-2.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-2.png",
    },

    {
      original: "/damyo/damyo-5.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-5.png",
    },
    {
      original: "/damyo/damyo-6.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-6.png",
    },
    {
      original: "/damyo/damyo-4.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-4.png",
    },
    {
      original: "/damyo/damyo-7.png",
      originalHeight: "600px",
      thumbnail: "/damyo/damyo-7.png",
    },
  ];

  return (
    <div>
      <ScrollToTop />
      <div className="project-container">
        <div className="project-box">
          <div className="project-main-info">
            <div className="project-main-info-box">
              <img alt="담요" className="project-img" src={damyoImage} />
            </div>
            <div className="project-main-info-box">
              <p className="project-title">담요 - 담배는 요기서</p>
              <p className="project-description">
                흡연구역 정보 제공 모바일 애플리케이션
              </p>
            </div>
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
          <div className="project-index">🔗 링크</div>
          <div className="project-link-box">
            <a
              href="https://github.com/Alpha-Damyo"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGithub style={{ fontSize: "30px", minWidth: "30px" }} />
                Github
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=5wS-LDVArWY"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiYoutube
                  style={{
                    fontSize: "30px",
                    minWidth: "30px",
                    color: "red",
                  }}
                />
                시연 영상
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.damyo_app"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGoogleplay
                  style={{
                    fontSize: "30px",
                    minWidth: "30px",
                    color: "green",
                  }}
                />
                Google Play
              </div>
            </a>
          </div>

          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>Flutter, Dart, SQLite</li>
          <li>Naver Map, Naver Auth, Google Auth </li>
          <li>provider, sqflite, geolocator, fl_chart</li>

          <div className="project-index">🛠️ 역할</div>
          <li style={{ fontSize: "20px" }}>프로젝트 팀장</li>
          <ol style={{ listStyleType: "inherit" }}>
            <li>
              {" "}
              프로젝트를 기획하고 팀장을 맡아 팀원들을 모집하고 개발을 이끎
            </li>
            <li>
              {" "}
              매주 오프라인 회의를 주도하여 진행 상황을 공유하고 다음 주까지
              개발할 내용을 정함
            </li>

            <li>
              {" "}
              프로젝트 예산 및 지원금을 관리하였으며 관련 서류들을 처리함
            </li>
          </ol>
          <li style={{ fontSize: "20px" }}>프론트엔드 개발</li>
          <ol style={{ listStyleType: "inherit" }}>
            <li> 흡연구역 지도 구현</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>네이버 지도 라이브러리를 사용하여 지도 구현</li>
              <li>
                지도 위에 오버레이를 통해 빨간색 핀을 배치하고 흡연구역임을
                나타냄
              </li>
              <li>
                geolocator 라이브러리를 사용하여 앱 시작 시 사용자의 현재 위치를
                불러오고 지도의 중심으로 설정
              </li>
            </ol>
            <li style={{ marginTop: "20px" }}>흡연구역 검색 기능 구현</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>
                흡연구역 이름을 검색하면 흡연구역들의 정보가 나오도록 검색어
                검색 기능을 구현
              </li>
              <li>‘개방’, ‘실외’ 등의 태그 검색 기능 구현</li>
              <li>캐시 데이터를 활용하여 최근 검색어 기능 구현</li>
            </ol>

            <li style={{ marginTop: "20px" }}>흡연구역 즐겨찾기 기능 구현</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>사용자가 폴더를 만들고 흡연구역들을 관리할 수 있도록 구현</li>
              <li>
                즐겨찾기에서 흡연구역을 터치하면 해당 흡연구역의 위치로 지도를
                이동
              </li>
            </ol>
            <li style={{ marginTop: "20px" }}>흡연구역 제보 기능 구현</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>지도를 움직여 원하는 위치를 제보할 수 있도록 설정</li>
              <li>
                제보 버튼을 누르면 해당 좌표를 주소로 변환하여 자동으로
                입력하도록 설정
              </li>
            </ol>
            <li style={{ marginTop: "20px" }}>
              흡연구역 리뷰, 수정 제안 기능 구현
            </li>
            <li>구글 로그인 기능 구현</li>
            <li>구글 플레이스토어에 배포 진행</li>
          </ol>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
