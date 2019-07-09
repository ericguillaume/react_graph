import React, { Component } from "react";

export default class MaterialUI extends Component {
  render() {
    return (
      <div>
        <div class="progress-container">
          <span class="progress-badge">Default</span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "25%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
