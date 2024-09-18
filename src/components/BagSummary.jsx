import { useDispatch, useSelector } from "react-redux";
const BagSummary = () => {
  const bag = useSelector((store) => store.bag);
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  const items = useSelector((store) => store.items);
  const allItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });

  allItems.forEach((element) => {
    totalMRP += Number(element.original_price);
    totalDiscount += Number(element.current_price);
  });

  // console.log(`${totalMRP} ${totalDiscount}`);

  const bagSummary = {
    totalItem: bag.length,
    totalMRP: totalMRP,
    totalDiscount: totalDiscount,
    finalPayment: totalMRP - totalDiscount + 99,
  };
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagSummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
