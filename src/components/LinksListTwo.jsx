import React, { useState } from "react";
import { usefulLinksTwo } from "../LinksData";

export default function LinksListTwo(props) {
  const taskListTwo = props.tasksTwo?.map((task) => (
    <li>
      <a href={task.href}>{task.title}</a>
    </li>
  ));

  return (
    <div className="col-xs-12 col-sm-4 col-md-12 col-xl-4 wow zoomIn animated">
      <div className="links-list-wrapper ">
        <div className="links-list standard">
          <div className="value-box">
            <div className="value-box-content">
              <span className="value">
                <i></i>
                <span className="number"> RESOURCES </span>
              </span>
              <span className="month">Nice And Free</span>
            </div>
          </div>

          <div className="content-box">
            <ul>{taskListTwo}</ul>
          </div>
          <div className="page-up">
            <a href="#">
              <span>Page Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
