import AddNote from "../components/AddNote/AddNote";
import SideBar from "../components/SideBar/SideBar";
import ViewNote from "../components/ViewNote/ViewNote";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="layout">
      <SideBar />
      <AddNote />
      <ViewNote />
    </div>
  );
};

export default HomeScreen;
