import React, { Component, Fragment } from "react";
import cons_plan from "../images/construction-plans-with-yellow-helmet-drawing-tools-bluep.jpg";

class Signup extends Component {
  render() {
    return (
      <Fragment>
        <div className="signup">
          <img src={cons_plan} alt="Construction Paln" className="consplan" />
        </div>
      </Fragment>
    );
  }
}
export default Signup;
