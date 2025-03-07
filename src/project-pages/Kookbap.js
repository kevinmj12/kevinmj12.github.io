import kookbapImage from "../libs/images/kookbap.png";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ScrollToTop from "../scroll-to-top";

export default function Kookbap() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

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
          <div className="project-back">
            <IoArrowBack onClick={handleBack} />
          </div>
          <img alt="포포" className="project-img" src={kookbapImage} />
          <p className="project-title">국밥</p>
          <p className="project-description">국민대학교 학식 정보제공앱</p>
          <div className="project-index">🔗 링크</div>
          <div className="project-link">
            <SiGithub style={{ minWidth: "20px" }} />
            <a
              href="https://github.com/ji-hunc/kookbap"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/ji-hunc/kookbap
            </a>
          </div>
          <div className="project-link">
            <SiGithub style={{ minWidth: "20px" }} />
            <a
              href="https://github.com/ji-hunc/kookbap/tree/main/machineLearning"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/ji-hunc/kookbap/tree/main/machineLearning
            </a>
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

          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>Android, Node.js, Express, MySQL</li>
          <li>Java, Python, Pytorch</li>
          <li>Retrofit, Firebase Cloud Messaging</li>

          <div className="project-index">🛠️ 역할</div>
          <li>잠재요인 협업필터링을 통해 메뉴 추천 서비스를 구현하였습니다.</li>
          <li>RecyclerView를 통해 메뉴를 불러오도록 하였습니다.</li>
          <li>마이페이지를 구현하였습니다</li>
          <li>
            {" "}
            Firebase Cloud Messaging을 통해 알림 서비스를 구현하였습니다.
          </li>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
