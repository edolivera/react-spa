import React, { useState } from "react";
import { usefulLinksOne } from "../LinksData";

export default function LinksListOne(props) {
  const taskList = props.tasks?.map((task) => (
    <li>
      <a href={task.href}>{task.title}</a>
    </li>
  ));

  return (
    <div className="col-xs-12 col-sm-4 col-md-12 col-xl-4 wow fadeInLeft animated">
      <div className="links-list-wrapper ">
        <div className="links-list">
          <div className="value-box">
            <div className="value-box-content">
              <span className="value">
                <i></i>
                <span className="number">TUTORIALS</span>
              </span>
              <span className="month invisible"></span>
            </div>
          </div>

          <div className="content-box">
            <ul>{taskList}</ul>
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
