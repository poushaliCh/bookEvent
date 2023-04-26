import React from "react";

export default function Cart(props) {
  var cartItem = props.location.state.cartItem;
  // console.log('carItemsss',cartItem);
  var sum = cartItem.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);
  // console.log('carItemsss',sum);

  console.log(cartItem);

  const checkOut = () => {
    // console.log("carItemsss");
    props.history.push({
      pathname: "/checkout",
      state: { cartItem: cartItem, totalAmount:sum }
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
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            color: "#115D77",
            marginBottom: "20px",
            fontSize: "35px",
            fontWeight: "bolder",
          }}
        >
          ------- Your Items -------
        </p>
      </section>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <table border={1} width="20%" cellPadding={10}>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td
                style={{
                  fontWeight: "bolder",
                  fontSize: "23px",
                  color: "#0C83C3",
                }}
              >
                Game Name
              </td>
              <td
                style={{
                  fontWeight: "bolder",
                  fontSize: "23px",
                  color: "#0C83C3",
                }}
              >
                Game Price
              </td>
            </tr>
            {cartItem.map((val, id) => {
              return (
                <tr key={id}>
                  <td style={{ color: "green", fontWeight: "bold" }}>
                    {val.name}
                  </td>
                  <td style={{ color: "red", fontWeight: "bold" }}>
                    {val.amount}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td style={{ color: "purple", fontWeight: "bold" }}>
                Total Amount
              </td>
              <td style={{ color: "green", fontWeight: "bold" }}>{sum}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <button
          type="button"
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
            width: "140px",
            padding: "15px",
          }}
          onClick={checkOut}
        >
          Checkout
        </button>
      </section>
    </>
  );
}
