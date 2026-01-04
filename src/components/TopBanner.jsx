import bannerImage from "../assets/banner.jpg";

export default function TopBanner() {
  return (
    <div className="top-banner">
      <img src={bannerImage} alt="Casino Banner" />

      {/* MOVING TEXT */}
      <div className="banner-text">
        <span> DISAWARWIN </span>
      </div>
    </div>
  );
}
