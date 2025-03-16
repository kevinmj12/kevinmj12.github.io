import pofoImage from "../libs/images/pofo.jpg";
import { SiGithub } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ScrollToTop from "../scroll-to-top";

export default function Pofo() {
  const images = [
    {
      original: "/pofo/pofo-main.png",
      originalHeight: "500px",
      thumbnail: "/pofo/pofo-main.png",
    },
    {
      original: "/pofo/pofo-post.png",
      originalHeight: "500px",
      thumbnail: "/pofo/pofo-post.png",
    },
    {
      original: "/pofo/pofo-newpost.png",
      originalHeight: "500px",
      thumbnail: "/pofo/pofo-newpost.png",
    },
    {
      original: "/pofo/pofo-mypage.png",
      originalHeight: "500px",
      thumbnail: "/pofo/pofo-mypage.png",
    },
  ];
  return (
    <div>
      <ScrollToTop />
      <div className="project-container">
        <div className="project-box">
          <div className="project-main-info">
            <div className="project-main-info-box">
              <img alt="포포" className="project-img" src={pofoImage} />
            </div>
            <div className="project-main-info-box">
              <p className="project-title">포포</p>
              <p className="project-description">
                개발자 토이프로젝트 공유 서비스
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
              포포는 개발자들이 자신의 토이프로젝트를 공유할 수 있는
              서비스입니다.
            </p>
            <p>
              자신이 제작한 토이프로젝트를 공유할 수 있고, 다른 개발자들의
              토이프로젝트를 구경할 수 있는 사이트가 있으면 좋겠다는 생각으로
              제작하게 되었습니다.
            </p>
            <p>
              사용자는 깃허브를 통해 편리하게 로그인할 수 있으며 본인의
              프로젝트를 공유하고 다른 사람들의 프로젝트를 살펴볼 수 있습니다.
            </p>
          </div>
          <div className="project-index">🔗 링크</div>
          <div className="project-link-box">
            <a
              href="https://github.com/team-pofo/frontend"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGithub style={{ fontSize: "30px", minWidth: "30px" }} />
                Github
              </div>
            </a>
          </div>
          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>React, Next.js, TypeScript</li>
          <li>GraphQL, Zustand, Github Auth</li>
          <li>react-md-editor, Tailwind</li>

          <div className="project-index">🛠️ 역할</div>
          <li>프로젝트 검색 기능 구현</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              디바운스를 적용하여 스택을 입력한 뒤 일정 시간이 지나야 검색되도록
              구현
            </li>
          </ol>
          <li style={{ marginTop: "20px" }}>프로젝트 등록, 수정 기능 구현</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              마크다운 에디터를 커스텀하여 프로젝트 소개를 입력할 수 있도록 구현
            </li>
            <li>
              마크다운 에디터에 이미지를 드래그 앤 드롭 또는 복사 붙여넣기하여
              추가할 수 있도록 구현
            </li>
            <li>
              pre-signed URL을 통해 이미지를 S3에 직접 업로드하여 자원을 절약
            </li>
          </ol>
          <li style={{ marginTop: "20px" }}> 마이페이지 구현</li>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
