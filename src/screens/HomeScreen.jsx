import AddNote from "../components/AddNote/AddNote";
import Filter from "../components/Filter/Filter";
import SideBar from "../components/SideBar/SideBar";
import ViewNote from "../components/ViewNote/ViewNote";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="layout">
      <SideBar />
      <AddNote />
      <div className="filter">
      <Filter />
      </div> 
    <ViewNote />
    </div>
  );
};

export default HomeScreen;
