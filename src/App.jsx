import AppBar from "./components/AppBar";
import ButtonPanel from "./components/ButtonPanel";
import RevenueCard from "./components/RevenueCard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-gray-100 grid grid-cols-5">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-4">
        <AppBar />
        <div className="p-5 font-medium">Overview</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 items-start">
          <RevenueCard
            colored={true}
            extended={true}
            displayOrders={true}
            headerText={"Next Payout"}
            orderCount={23}
            amount={"2,312.23"}
            nextPaymentDate={"Today, 4:00PM"}
          />
          <RevenueCard
            colored={false}
            extended={false}
            displayOrders={true}
            headerText={"Amount Pending"}
            orderCount={13}
            amount={"92,312.20"}
          />
          <RevenueCard
            colored={false}
            extended={false}
            displayOrders={false}
            headerText={"Amount Processed"}
            amount={"23,92,312.19"}
          />
        </div>
        <div className="p-5 font-medium">Transactions | This Month</div>
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
