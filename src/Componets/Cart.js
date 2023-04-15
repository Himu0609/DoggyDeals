import React from "react";

function Cart(props) {
  const { item, setItem, setisDisabled, setMessage } = props;

  const handleRemove = (id) => {
    const newList = item.filter((item) => item.message !== id);
    setItem(newList);

    if (newList.length === 0 && item.length - 1 === 0) {
      setisDisabled(false);
      setMessage("Add To Cart");
    } else if (
      item[item.length - 1].message !== newList[newList.length - 1].message
    ) {
      return (setisDisabled(false) , setMessage("Add To Cart"))
    }
  };
 const onClearAll = () => { 
  setItem([]);
  setisDisabled(false);
  setMessage("Add To Cart");
 }
  return (
    <div>
      <div
        className="card text-black bg-light mb-3"
      >
        <div className="card-header bg-warning text-white h2">Your Cart</div>
        <div className="card-body">
          <h5 className="card-title">Summary</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Per Dog
              <button className="btn-primary" onClick={onClearAll}>Clear All</button>
              <span>$100</span>
            </li>
            {item.map((value, index) => {
              return (
                <li
                  key={value.message}
                  className="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  <img src={value.message} alt="" style={{ width: "50px" }} />
                  <button
                    className="btn-primary"
                    onClick={() => handleRemove(value.message)}
                  >
                    -
                  </button>
                </li>
              );
            })}
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
              </div>
              <span>
                <strong>{item.length * 100}$</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
