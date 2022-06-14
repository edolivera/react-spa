import React, { useState } from "react";
import { usefulLinksOne } from "../LinksData";
import { usefulLinksTwo } from "../LinksData";
import LinksListOne from "./LinksListOne";
import LinksListTwo from "./LinksListTwo";
import LinksListThree from "./LinksListThree";

export default function UsefulLinks() {
  const [links, setLinks] = useState(usefulLinksOne);
  
  return (
    <div>
      <section id="usefulLinks" className="">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding"
              data-wow-delay=".1s"
            >
              <h2>
                Useful <span>Links</span>
              </h2>
              <p>
              Here you can find some free and very useful resources, 
              including what we used in this tutorial! 
              Feel free to share, to copy and paste! Do whatever you want! 
              It's all ours and under Creative Commons License!
              </p>
            </div>

            <LinksListOne tasks={usefulLinksOne}/>
            <LinksListTwo tasksTwo={usefulLinksTwo}/>
            <LinksListThree />

            
          </div>
        </div>
      </section>
    </div>
  );
}
