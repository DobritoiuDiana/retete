import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

class CardRet extends Component {
  render() {
    const { id, denumire, imagine, ingrediente } = this.props;

    const lista = ingrediente.map((item) => <li key={item}>{item}</li>);
    return (
      <div
        className="card overflow-hidden col-sm-6 col-md-4 col-lg-3 mr-3"
        style={{
          width: "300px",
          height: "600px",
          border: "5px solid #66ffcc",
          boxShadow: "4px 7px 5px #004d66",
          position: "relative",
        }}
      >
        {" "}
        <img
          className="card-img-top"
          src={`/images/${imagine}`}
          alt="imagine"
        />{" "}
        <div
          className="card-body"
          style={{
            fontSize: "13px",
          }}
        >
          <h5 className="card-title">{denumire}</h5>
          <p
            style={{
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            Ingrediente:
          </p>
          <ul>{lista}</ul>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            value={id}
            style={{ position: "absolute", left: "8px", bottom: "8px" }}
            onClick={this.props.afiPrep}
          >
            <FontAwesomeIcon icon={faUtensils} />
            Mod de preparare
          </button>
        </div>
      </div>
    );
  }
}
export default CardRet;
