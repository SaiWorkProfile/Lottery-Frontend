import TopBanner from "../components/TopBanner";
import HeaderInfo from "../components/HeaderInfo";
import BettingTable from "../components/BettingTable";
import ResultButton from "../components/ResultButton";

export default function Home() {
  return (
    <div className="page-wrapper">
          <div className="content-frame">
      <TopBanner />
      <HeaderInfo />
      <BettingTable />
      <ResultButton />
    </div>
    </div>
  );
}
