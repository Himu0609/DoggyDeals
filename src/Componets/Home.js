import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Home() {
  const [dog, setDog] = useState({});
  const [addToCart, setAddToCart] = useState(0);
  const [message, setMessage] = useState("Add To Cart");
  const [item, setItem] = useState([]);
  const [isdisabled, setisDisabled] = useState(false);
  const fetchDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDog(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  const handleClick = () => {
    fetchDogs();
    setisDisabled(false);
    setMessage("Add To Cart");
  };

  const onCartClick = () => {
    setAddToCart(addToCart + 1);
    setMessage("Added to Cart Succesfully");
    item.push(dog);
    setisDisabled(true);
  };

  return (
    <div className="mt-4 container">
      <div className="row">
        <div className="container col-sm-12 col-md-12 col-lg-6">
          <h1>
            <b> Helping You Find Your Furever Friend</b>
          </h1>
          {dog.status === "success" ? (
            <div className="card justify-content-between">
              <img
                src={dog.message}
                className="card-img-top"
                style={{ height: "20rem" }}
                alt=""
              />
              <div className="card-body">
                <p>
                  <b>Find Your Random Pet </b>
                </p>
                <button className="btn btn-primary" onClick={handleClick}>
                  Find
                </button>
                <div className="d-grid gap-2 mt-2">
                  <button
                    disabled={isdisabled}
                    className="btn btn-success"
                    type="button"
                    onClick={onCartClick}
                  >
                    {message}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card  justify-content-between">
              <h2>Sorry! Could Not Load The Image</h2>
            </div>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <Cart addToCart={addToCart} dog={dog} item={item} setItem={setItem} />
        </div>
      </div>
    </div>
  );
}

export default Home;
