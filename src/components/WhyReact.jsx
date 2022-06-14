import React from "react";

export default function WhyReact() {
  return (
    <>
      <section id="why-react" className="">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-sm-5 col-md-3 wow fadeInLeft animated"
              data-wow-delay=".5s"
            >
              <h1>
                <span>WHY REACT?</span>WATCH OUR TUTORIAL
              </h1>
            </div>
            <div
              className="col-xs-12 col-sm-7 col-md-9 wow fadeInRight animated"
              data-wow-delay=".5s"
            >
              <h2>React/Bootstrap Single Page Application Tutorial </h2>

              <h4>Declarative</h4>
              <p>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes. Declarative views make your code more
                predictable and easier to debug.
              </p>
              <h4>Component-Based</h4>
              <p>
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs. Since component logic is
                written in JavaScript instead of templates, you can easily pass
                rich data through your app and keep state out of the DOM.
              </p>
              <h4>Learn Once, Write Anywhere</h4>
              <p>
                We don’t make assumptions about the rest of your technology
                stack, so you can develop new features in React without
                rewriting existing code. React can also render on the server
                using Node and power mobile apps using React Native.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
