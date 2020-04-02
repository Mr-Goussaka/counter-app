import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset it
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIcrement={this.props.onIcrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
