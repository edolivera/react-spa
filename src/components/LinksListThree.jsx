import React, { useState } from "react";
import { usefulLinks } from "../LinksData";

export default function LinksListThree(props) {
  const taskList = props.tasks?.map((task) => (
    <li>
      <a href={task.href}>{task.title}</a>
    </li>
  ));

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4 wow zoomIn animated">
      <div className="links-list-wrapper ">
        <div className="links-list">
          <div className="value-box">
            <div className="value-box-content">
              <span className="value">
                <span className="number">IMPORTANT!</span>
              </span>
              <span className="month invisible"></span>
            </div>
          </div>

          <div className="content-box">
            <ul>
              <li>This layout was inspired by a template called: "Canvas"</li>
              <li>from http://templatestock.co/</li>
              <li>Which unfortunately no longer exists...</li>
              <li> So, my sincere apologies</li>
              <li> Because I don't have any link from it's original</li>
              <li>But thanks to the company anyway!</li>
            </ul>
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
