import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default class Pro1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      totalprice: null,
    };
  }
  async componentDidMount() {
    var arr = [];
    const url =
      "https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/356L";
    const response = await fetch(url);
    const datas = await response.json();
    // arr.push(datas.data.purchased_services)
    this.setState({ info: datas.data.purchased_services });
    console.log(this.state.info);
    var price = parseFloat(0);
    datas.data.purchased_services.map((e) =>
      e.purchased_office_template.purchased_office_services.map((j) =>
        j.service_selected != null
          ? (price = price + parseFloat(j.price))
          : (price = price + parseFloat(0))
      )
    );
    this.setState({ info: datas.data.purchased_services, totalprice: price });
  }

  render() {
    return (
      <>
        <div className="card mt-3 ml-3 mr-3">
          <h5 className="ml-2 mt-2">PURCHASED SERVICES</h5>
          <p className="ml-2 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          {this.state.info.map((e, i) => (
            <>
              {e.purchased_office_template.purchased_office_services.map(
                (inf) => (
                  <>
                    {inf.service_selected != null ? (
                      <>
                        <h6 className="ml-2">{e.name} :</h6>
                        <div className="card ml-2 mr-2 mb-2">
                          <div className="card-body">
                            <img
                              style={{ height: "5rem", width: "5rem" }}
                              src={inf.image}
                            ></img>
                            <span>{inf.name}</span>
                            <p className="para"> {inf.description}</p>
                            <p
                              className="font-weight-bold"
                              style={{ float: "right" }}
                            >
                              Kr {inf.price},-
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )
              )}
            </>
          ))}
          <div className="card mt-2 ml-2 mr-2 mb-2 text-white bg-dark">
            <div className="card-body">
              {this.state.info.map((e) => (
                <>
                  {e.purchased_office_template.purchased_office_services.map(
                    (i) => (
                      <>
                        {i.service_selected != null ? (
                          <div>
                            <span className="ml-2 mb-2">{i.name}</span>
                            <span style={{ float: "right" }}>
                              Kr {i.price},-
                            </span>
                          </div>
                        ) : (
                          <></>
                        )}
                      </>
                    )
                  )}
                </>
              ))}
              <hr></hr>
              <div>
                <span className="text-white ml-2">Total Costing</span>
                <span style={{ float: "right" }}>
                  Kr {this.state.totalprice},-
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3 ml-3 mr-3">
          <h5 className="ml-2 mt-2">ADDITIONAL SERVICES</h5>
          <p className="ml-2 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          {this.state.info.map((e, i) => (
            <>
              <h6 className="ml-2">{e.name} :</h6>
              {e.purchased_office_template.purchased_office_services.map(
                (inf) => (
                  <>
                    {inf.service_selected === null ? (
                      <>
                        <div className="card ml-2 mr-2 mb-2">
                          <div className="card-body">
                            <img
                              style={{ height: "5rem", width: "5rem" }}
                              src={inf.image}
                            ></img>
                            <span>{inf.name}</span>
                            <p className="para"> {inf.description}</p>
                            <p
                              className="font-weight-bold"
                              style={{ float: "right" }}
                            >
                              Kr {inf.price},-
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )
              )}
            </>
          ))}
        </div>
      </>
    );
  }
}
