import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import store from "../store";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <>
      <div className="item-holder">
        {items.map((item) => (
          <HomeItem key={item.id} item={item}></HomeItem>
        ))}
      </div>
    </>
  );
};
export default Home;
