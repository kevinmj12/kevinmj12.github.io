import kookbapImage from "../libs/images/kookbap.png";
import { SiGithub } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ScrollToTop from "../scroll-to-top";

export default function Kookbap() {
  const images = [
    {
      original: "/kookbap/kookbap-slide1.gif",
      originalHeight: "500px",
      thumbnail: "/kookbap/kookbap-thumbnail1.png",
    },
    {
      original: "/kookbap/kookbap-slide2.gif",
      originalHeight: "500px",
      thumbnail: "/kookbap/kookbap-thumbnail2.png",
    },
    {
      original: "/kookbap/kookbap-slide3.gif",
      originalHeight: "500px",
      thumbnail: "/kookbap/kookbap-thumbnail3.png",
    },
    {
      original: "/kookbap/kookbap-slide4.png",
      originalHeight: "500px",
      thumbnail: "/kookbap/kookbap-slide4.png",
    },
    {
      original: "/kookbap/kookbap-slide5.png",
      originalHeight: "500px",
      thumbnail: "/kookbap/kookbap-slide5.png",
    },
  ];
  return (
    <div>
      <ScrollToTop />
      <div className="project-container">
        <div className="project-box">
          <div className="project-main-info">
            <div className="project-main-info-box">
              <img alt="국밥" className="project-img" src={kookbapImage} />
            </div>
            <div className="project-main-info-box">
              <p className="project-title">국밥</p>
              <p className="project-description">
                국민대학교 학식 정보제공 모바일 애플리케이션
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
            <p>국밥은 국민대학교 학식 정보제공앱입니다.</p>
            <p>
              국민대학교 이메일로 로그인하면 학식 정보를 제공받을 수 있습니다.
            </p>
            <p>
              학식 메뉴마다 사진, 별점, 내용을 포함한 리뷰를 작성할 수 있고
              좋아요를 누를 수 있습니다.
            </p>
            <p>
              또한 사용자가 남긴 메뉴의 별점을 통해 메뉴 추천 서비스를
              제공합니다.
            </p>
          </div>

          <div className="project-index">🔗 링크</div>
          <div className="project-link-box">
            <a
              href="https://github.com/ji-hunc/kookbap"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGithub style={{ fontSize: "30px", minWidth: "30px" }} />
                Github
              </div>
            </a>
            <a
              href="https://github.com/ji-hunc/kookbap/tree/main/machineLearning"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGithub style={{ fontSize: "30px", minWidth: "30px" }} />
                Github-ML
              </div>
            </a>
          </div>

          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>Android, Node.js, Express, MySQL</li>
          <li>Java, Python, Pytorch</li>
          <li>Retrofit, Firebase Cloud Messaging</li>

          <div className="project-index">🛠️ 역할</div>
          <li>메뉴 추천 페이지 구현</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>잠재요인 협업필터링을 통해 메뉴 추천 서비스를 구현</li>
            <li>
              매일 자정마다 당일 학식 메뉴와 별점 데이터를 통해 모든 사용자의
              추천 메뉴를 연산하여 DB에 업데이트함
            </li>
          </ol>
          <li style={{ marginTop: "20px" }}>마이페이지 구현</li>
          <ol style={{ listStyleType: "inherit", margin: "0px" }}>
            <li>
              Firebase Cloud Messaging, NotificationManager을 통해 알림 서비스를
              구현
            </li>
            <li>RecyclerView를 통해 '내가 쓴 리뷰' 카드들을 불러옴</li>
          </ol>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
