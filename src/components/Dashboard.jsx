import Maincontent from "./MainContent";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Maincontent/>
    </div>
  );
}
export default Dashboard;
