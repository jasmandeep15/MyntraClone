import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bag = useSelector((sotre) => sotre.bag);
  const Dispatch = useDispatch();
  const add = (id) => {
    Dispatch(bagActions.addToBag(id));
  };
  const remove = (id) => {
    Dispatch(bagActions.removeFromBag(id));
  };
  return (
    // <main>
    //   <div classNameName="items-container"></div>
    // </main>

    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bag.includes(item.id) ? (
        <button className="btn-add-bag remove" onClick={() => remove(item.id)}>
          Remove from Bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={() => add(item.id)}>
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
