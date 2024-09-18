import { useDispatch, useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bag = useSelector((store) => store.bag);

  const items = useSelector((store) => store.items);
  const allItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });
  const dispatch = useDispatch();
  return (
    <>
      <main>
        <div className="bag-page">
          {allItems.map((item) => {
            return <BagItem item={item} />;
          })}
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
