import React, { Component } from "react";

class Afis2 extends Component {
  render() {
    //  Caut reteta
    const { retete, id } = this.props;
    var mod = null;
    retete.forEach(caut);
    function caut(item, index) {
      if (item.id == id) {
        mod = item.preparare;
      }
    }
    return (
      <div
        style={{
          width: "500px",
          border: "1px solid #cc0000",
          boxShadow: "7px 10px 8px #cc6699",
          position: "relative",
          padding: "20px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <h3 className="text-center mt-5 mb-2">Mod de preparare:</h3>
        <p>{mod}</p>
        <br />{" "}
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          value="0"
          style={{ position: "absolute", right: "8px", bottom: "8px" }}
          onClick={this.props.afiPrep}
        >
          Renunta
        </button>
      </div>
    );
  }
}
export default Afis2;
