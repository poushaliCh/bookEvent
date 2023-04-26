import React, { useEffect, useState } from "react";

export default function CheckOut(props) {
  const [data, setData] = useState([]);

  const cartItem = props.location.state.cartItem;
  const totalAmount = props.location.state.totalAmount;

  // console.log("totalAmount",totalAmount);

  const [endDatedisable, setEndDatedisable] = useState(true);
  const [eStartDate, setEStartDate] = useState("");
  const [eStartDateFormat, setEStartDateFormat] = useState("");

  const [setUpdate, setSetUpdate] = useState("");
  const [tCharge, setTCharge] = useState("");
  const [payment, setPayment] = useState("");

  const [eEndDate, setEEndDate] = useState([]);
  const [eEndDateFormat, setEEndDateFormat] = useState("");

  const [location, setLocation] = useState("");
  const [distancee, setDistancee] = useState("");

  const [eStartTime, setEStartTime] = useState("");
  const [eEndTime, setEEndTime] = useState("");
  const [setUpTime, setSetUpTime] = useState("");

  const [show, setShow] = useState(false);

  const getData = () => {
    fetch("data.json", {
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

  const handlerStartDate = (e) => {
    const val = e.target.value;
    const valFormat = val.split("-");
    const year = valFormat[0];
    const month = valFormat[1];
    const day = valFormat[2];
    const startDATE = year + "" + month + "" + day;
    setEStartDate(val);
    setEStartDateFormat(startDATE);
    setEndDatedisable(false);
    // console.log(val);
    // console.log(startDATE);
  };

  const handlerEndDate = (e) => {
    const val = e.target.value;
    const valFormat = val.split("-");
    const year = valFormat[0];
    const month = valFormat[1];
    const day = valFormat[2];
    const endDATE = year + "" + month + "" + day;
    setEEndDate(val);
    setEEndDateFormat(endDATE);
    if (endDATE < eStartDateFormat) {
      alert("End Date must be greater than Start Date");
    }
    // console.log(endDATE);
  };

  const setUpdateChange = (e) => {
    const val = e.target.value;
    const valFormat = val.split("-");
    const year = valFormat[0];
    const month = valFormat[1];
    const day = valFormat[2];
    const setUpDATE = year + "" + month + "" + day;
    const diff = eStartDateFormat - setUpDATE;
    if (diff < 2) {
      alert("Set Up date atleast 2 day earlier than Start date");
    } else {
      setSetUpdate(val);
    }
    // console.log(diff);
  };

  const locationChange = (e) => {
    // console.log(e.target.value);
    // setLocation(e.target.value);
    // console.log(data);
    const distance = data.find((val) => val.Id == e.target.value).Distance;
    const loc = data.find((val) => val.Id == e.target.value).name;
    setLocation(loc);
    // console.log(distance);
    setDistancee(distance);

    const total_distance = 2 * parseInt(distance);
    console.log(total_distance);

    if (total_distance <= 30) {
      setTCharge(1500);
    } else {
      const rem_distance = total_distance - 30;
      const cost = rem_distance * 50 + 1500;
      setTCharge(cost);
    }
  };

  const handlerCharge = (e) => {
    setTCharge(e.target.value);
  };
  const handlerPayment = (e) => {
    setPayment(e.target.value);
  };
  const handlerStartTime = (e) => {
    setEStartTime(e.target.value);
  };
  const handlerEndTime = (e) => {
    setEEndTime(e.target.value);
  };
  const handlerSetupTime = (e) => {
    setSetUpTime(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
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
          Give some details
        </p>
      </section>
      <br />
      <br />

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <form onSubmit={submitHandler}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  maxWidth: "500px",
                  marginRight: "100px",
                }}
              >
                <label
                  htmlFor="eStartDate"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Event Start Date:
                </label>
                <input
                  type="date"
                  name="eStartDate"
                  id="eStartDate"
                  value={eStartDate}
                  onChange={(e) => handlerStartDate(e)}
                />
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <label
                  htmlFor="eStartTime"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Event Start Time:
                </label>
                <input
                  type="time"
                  name="eStartTime"
                  id="eStartTime"
                  value={eStartTime}
                  onChange={handlerStartTime}
                />
              </div>
              <br />
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  maxWidth: "500px",
                  marginRight: "100px",
                }}
              >
                <label
                  htmlFor="eEndDate"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Event End Date:
                </label>
                <input
                  type="date"
                  name="eEndDate"
                  id="eEndDate"
                  value={eEndDate}
                  disabled={endDatedisable}
                  onChange={handlerEndDate}
                />
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <label
                  htmlFor="eEndTime"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Event End Time:
                </label>
                <input
                  type="time"
                  name="eEndTime"
                  id="eEndTime"
                  value={eEndTime}
                  onChange={handlerEndTime}
                />
              </div>
              <br />
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  maxWidth: "500px",
                  marginRight: "100px",
                }}
              >
                <label
                  htmlFor="setDate"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Set Up Date:
                </label>
                <input
                  type="date"
                  name="setDate"
                  id="setDate"
                  value={setUpdate}
                  onChange={setUpdateChange}
                />
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <label
                  htmlFor="setTime"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Set Up Time:
                </label>
                <input
                  type="time"
                  name="setTime"
                  id="setTime"
                  value={setUpTime}
                  onChange={handlerSetupTime}
                />
              </div>
              <br />
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  maxWidth: "500px",
                  marginRight: "100px",
                }}
              >
                <label
                  htmlFor="location"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Location:
                </label>
                <select
                  name="location"
                  id="location"
                  onChange={locationChange}
                  // onChange={handleProduct}
                >
                  <option value="">select</option>
                  {data.map((val) => {
                    return (
                      <option value={val.Id} id={val.Id}>
                        {val.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <label
                  htmlFor="distance"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Distance:
                </label>
                <input
                  type="text"
                  name="distance"
                  id="distance"
                  value={distancee}
                  // onChange={handlerGameName}
                />
              </div>
              <br />
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  maxWidth: "500px",
                  marginRight: "100px",
                }}
              >
                <label
                  htmlFor="payment"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Payment Method:
                </label>
                <input
                  type="text"
                  name="payment"
                  id="payment"
                  value={payment}
                  onChange={handlerPayment}
                />
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <label
                  htmlFor="tCharge"
                  style={{
                    marginRight: "20px",
                    color: "#115D77",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  transport Charge:
                </label>
                <input
                  type="text"
                  name="tCharge"
                  id="tCharge"
                  value={tCharge}
                  onChange={handlerCharge}
                />
              </div>
              <br />
            </div>
            <br />
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  backgroundColor: "#115D77",
                  color: "white",
                  height: "35px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Add Details
              </button>
              <br />
              <br />
            </div>
          </form>
        </div>
      </section>

      {show ? (
        <>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "20px",
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
              Your Details to Book Event
            </p>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                width: "500px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Event Start Date : </h3>
                <h3>{eStartDate}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Event Start Time :</h3>
                <h3>{eStartTime}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Event End Date :</h3>
                <h3>{eEndDate}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Event End Time :</h3>
                <h3>{eEndTime}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Event Setup Date :</h3>
                <h3>{setUpdate}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Event Setup Time :</h3>
                <h3>{setUpTime}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Location :</h3>
                <h3>{location}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Distance :</h3>
                <h3>{distancee}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Payment Method :</h3>
                <h3>{payment}</h3>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <h3 style={{ color: "#0A83BE" }}>Transport Charge :</h3>
                <h3>{tCharge}</h3>
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}
