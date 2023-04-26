import React, { useState, useEffect } from "react";

export default function GameList(props) {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = () => {
    fetch("gameList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCart = (e) => {
    // console.log(e);
    setCartData((cart) => [...cart, e]);
    setCount(count + 1);
  };

  // console.log("cart", cartData);

  const passText = () => {
    props.history.push({
      pathname: "/cart",
      state: { cartItem: cartData },
    });
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#115D77",
            marginBottom: "20px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          ----- Chosse Game From Here -----
        </p>
      </section>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <section></section>
        <section></section>
        <section></section>

        <section>
          {data &&
            data.length > 0 &&
            data.map((val) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3
                    key={val.Id}
                    style={{ marginRight: "80px", color: "#1FA0CC" }}
                  >
                    {val.name}
                  </h3>
                  <h3
                    key={val.id}
                    style={{ marginRight: "80px", color: "#BD094B" }}
                  >
                    Rs.{val.amount}
                  </h3>
                  <button
                    onClick={() => {
                      addToCart(val);
                    }}
                    style={{
                      border: "2px solid #098A30",
                      borderRadius: "15px",
                      backgroundColor: "#08AB39",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
        </section>
        <br />

        <section>
          <button
            onClick={passText}
            style={{
              border: "none",
              borderRadius: "25px",
              backgroundColor: "#BD094B",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              TextDecoder: "none",
              textAlign: "center",
              height: "50px",
              width: "100px",
              padding: "15px",
            }}
          >
            Cart
            <span
              style={{ padding: "20px", fontSize: "20px", fontWeight: "bold" }}
            >
              {count}
            </span>
          </button>
        </section>
      </div>
    </>
  );
}
