import React from "react";
import "./form.style.css";

class Form extends React.Component {
  error() {
    return (
      <div className="col-12 py-2">
        <div
          className="alert alert-warning alert-dismissible fade show"
          dismissible="true"
          role="alert"
        >
          Please Enter City And Country
          <button
            type="button"
            className="close"
            onClick={this.props.hideAlert}
          >
            <span>&times;</span>
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.loadWeather}>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                type="text"
                name="city"
                autoComplete="off"
                className="form-control"
                placeholder="City"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="country"
                autoComplete="off"
                className="form-control"
                placeholder="Country"
              />
            </div>
            <div className="col-md-3 mt-md-0 py-2 text-md-left">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
        <div>{this.props.error ? this.error() : null}</div>
      </div>
    );
  }
}

export default Form;
