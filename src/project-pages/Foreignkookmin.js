import foreignkookminImage from "../libs/images/foreign-kookmin.png";
import { SiGithub, SiYoutube, SiGoogleplay } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ScrollToTop from "../scroll-to-top";

export default function Pofo() {
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
          <div className="project-main-info">
            <div className="project-main-info-box">
              <img
                alt="외국민"
                className="project-img"
                src={foreignkookminImage}
              />
            </div>
            <div className="project-main-info-box">
              <p className="project-title">외국민</p>
              <p className="project-description">
                국민대학교 외국인 유학생 정보제공 모바일 애플리케이션
              </p>
            </div>
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
              공지사항 및 학식 정보 제공, 게시판, 챗봇 서비스, 발음연습 서비스를
              제공합니다.
            </p>
          </div>

          <div className="project-index">🔗 링크</div>
          <div className="project-link-box">
            <a
              href="https://github.com/kookmin-sw/capstone-2024-30"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGithub style={{ fontSize: "30px", minWidth: "30px" }} />
                Github
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=IGSK7kev9ks"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiYoutube
                  style={{ fontSize: "30px", minWidth: "30px", color: "red" }}
                />
                시연 영상
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.foreign.kookmin&pli=1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGoogleplay
                  style={{ fontSize: "30px", minWidth: "30px", color: "green" }}
                />
                Google Play
              </div>
            </a>
          </div>

          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>Flutter, Dart, SQLite</li>
          <li>Firebase Auth, Azure Speech API</li>
          <li>easy_localization, flutter_sound, audio_session, record</li>

          <div className="project-index">🛠️ 역할</div>
          <li>메인 페이지</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              Firebase Auth를 사용하여 국민대 이메일 인증 및 로그인, 회원가입
              서비스를 구현
            </li>
            <li>
              easy_localization을 활용하여 언어 변경 시스템을 구축하고 영어,
              중국어를 추가
            </li>
          </ol>
          <li style={{ marginTop: "20px" }}>발음 연습 페이지</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              Microsoft Azure Sppech API를 사용하여 점수와 분석 결과를 받아옴
            </li>
            <li>
              사용자로부터 음성을 녹음받고 음성 파일을 wav파일로 변환하여 API를
              사용
            </li>
            <li>원형 막대 점수와 상세 점수, 상세 분석 결과 제공</li>
          </ol>

          <li style={{ marginTop: "20px" }}>챗봇 페이지</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              State Pattern을 활용하여 챗봇이 답변을 생성하고 있을 때 다른
              질문을 입력받을 수 없도록 차단
            </li>
            <li>
              전송 버튼 터치 시 키보드 내려가기, 새로운 질문 입력 시 해당 질문이
              보이도록 포커스 맞추기 등 채팅 서비스에서 필요로 하는 기능들을
              구현
            </li>
          </ol>
          <li style={{ marginTop: "20px" }}>학식 페이지</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              국민대학교에서 제공하는 json 형태의 학식 데이터를 가공하여 정보를
              제공
            </li>
          </ol>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
