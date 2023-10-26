import "./App.css";
import Header from "./Components/Header/Header";
import SideNavbar from "./Components/SideNavbar/SideNavbar.jsx";
import SkillTest from "./Components/SkillTest/SkillTest";
function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNavbar />
        <SkillTest />
      </div>
    </>
  );
}

export default App;
