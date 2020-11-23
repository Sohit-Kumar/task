import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Pro = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const { datas } = await Axios.get("https://jsonkeeper.com/b/356L");

      setInfo(datas);
    };
    fetchResponse();
  }, []);

  console.log(info);
  return (
    <div>
      {/* PURCHASED SERVICES */}
      <div className="card" style={{ width: "80rem" }}>
        <div className="card-body">
          <h5 className="card-title">PURCHASED SERVICES</h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <h5>Main Service 1:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          <h5>Main Service 2:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          <h5>Main Service 3:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
      {/* Additional SERVICES */}
      <div className="card" style={{ width: "80rem", marginTop: "2rem" }}>
        <div className="card-body">
          <h5 className="card-title">ADDITIONAL SERVICES</h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <h5>Main Service 4:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          <h5>Main Service 5:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          <h5>Main Service 6:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          <h5>Main Service 7:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          <h5>Main Service 8:</h5>
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
