import * as React from "react";

class ScrollSelect extends React.Component {
  render() {
    return (
      <div className="red">
        <h1>{this.props.Name}</h1>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default ScrollSelect;
