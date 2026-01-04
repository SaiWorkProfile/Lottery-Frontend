import TopBanner from "../components/TopBanner";
import HeaderInfo from "../components/HeaderInfo";
import BettingTable from "../components/BettingTable";
import ResultButton from "../components/ResultButton";

export default function Home() {
  return (
    <div className="page-wrapper">
      
      {/* MAIN CONTENT */}
      <div className="content-frame">
        <TopBanner />
        <HeaderInfo />
        <BettingTable />
        <ResultButton />
      </div>

      {/* DISCLAIMER FOOTER */}
      <footer className="site-disclaimer">
        <p>
          Viewing This WebSite Is On Your Own Risk. All the information shown on
          this website is only for information purposes. We are not associated
          with any illegal Matka business or gamblers. We warn you that Matka
          gambling in your country may be banned or illegal. We are not
          responsible for any issues or scams. We respect all country rules and
          laws. If you do not agree with our site disclaimer, please quit our
          site right now. Copying, promoting, or publishing any of our content in
          any type of media or other source is illegal and against the law.
        </p>
      </footer>

    </div>
  );
}
