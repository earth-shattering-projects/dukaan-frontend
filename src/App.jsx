import AppBar from "./components/AppBar";
import ButtonPanel from "./components/ButtonPanel";
import Overview from "./components/Overview";
import RevenueCard from "./components/RevenueCard";
import SideBar from "./components/SideBar";
import Transactions from "./components/Transactions";
const App = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-full bg-sideBarBlue">
        <SideBar />
      </div>
      <div className="bg-backGroundGray col-span-9">
        <AppBar />
        <div className="m-5">
          <Overview />
          <div className="grid grid-cols-3 items-start">
            <RevenueCard
              extended={true}
              orderCount={23}
              headerText={"Next Payout"}
            />
            <RevenueCard
              extended={false}
              orderCount={13}
              headerText={"Amount Pending"}
            />
            <RevenueCard extended={false} headerText={"Amount Processed"} />
          </div>
          <Transactions />
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
