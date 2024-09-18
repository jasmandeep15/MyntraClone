import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetch = useSelector((store) => store.fetchStatus);
  console.log(fetch.currentlyFetching);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetch.currentlyFetching ? <Loader /> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
