import programerStockImage from "../libs/images/programer-stock.png";
import { SiGithub, SiYoutube } from "react-icons/si";
import "./projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ScrollToTop from "../scroll-to-top";

export default function ProgramerStock() {
  const images = [
    {
      original: "/programerstock/ps-home.png",
      originalHeight: "500px",
      thumbnail: "/programerstock/ps-home.png",
    },
    {
      original: "/programerstock/ps-tesla.png",
      originalHeight: "500px",
      thumbnail: "/programerstock/ps-tesla.png",
    },
    {
      original: "/programerstock/ps-assets.png",
      originalHeight: "500px",
      thumbnail: "/programerstock/ps-assets.png",
    },
    {
      original: "/programerstock/ps-transactions.png",
      originalHeight: "500px",
      thumbnail: "/programerstock/ps-transactions.png",
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
                alt="프로그래머스탁"
                className="project-img"
                src={programerStockImage}
              />
            </div>
            <div className="project-main-info-box">
              <p className="project-title">프로그래머스탁</p>
              <p className="project-description">모의 주식 투자 서비스</p>
            </div>
          </div>

          <div className="project-index">⭐ 소개</div>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          <div style={{ lineHeight: "normal" }}>
            <p>프로그래머스탁은 주식 모의 투자 서비스입니다.</p>
            <li>주식 조회, 매매</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>
                대표 주식 5개의 매매를 진행할 수 있으며 주가는 Alpha Vantage
                API를 사용하여 매일 5번 업데이트됩니다.
              </li>
              <li>
                그래프를 통해 일 / 실시간별로 주가를 확인할 수 있고 매매를
                진행할 수 있습니다.
              </li>
            </ol>
            <li style={{ marginTop: "20px" }}>보유 자산 확인</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>보유한 자산(주식, 현금)을 확인할 수 있습니다.</li>
              <li>
                총 수익률, 총 수익금, 1주 평균 금액 등의 상세한 정보를 확인할 수
                있습니다.
              </li>
              <li>
                각 항목을 오름차순 / 내림차순으로 정렬하여 확인할 수 있습니다.
              </li>
            </ol>
            <li style={{ marginTop: "20px" }}>거래 내역 확인</li>
            <ol style={{ listStyleType: "inherit", margin: "0px" }}>
              <li>주식 구매 / 판매 내역을 확인할 수 있습니다.</li>
              <li>각 항목을 클릭하여 상세 매매 내역을 확인할 수 있습니다.</li>
            </ol>
          </div>
          <div className="project-index">🔗 링크</div>
          <div className="project-link-box">
            <a
              href="https://github.com/kevinmj12/stock-simulator"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-link">
                <SiGithub style={{ fontSize: "30px", minWidth: "30px" }} />
                Github
              </div>
            </a>
            <a
              href="https://youtu.be/AAQwmAR5AvI"
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
          </div>
          <div className="project-index">📖 사용 기술 및 핵심 라이브러리</div>
          <li>React, TypeScript</li>
          <li>Zustand, ReChart, Styled-Components</li>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
