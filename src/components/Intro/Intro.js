import React from "react";

function Intro() {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img
          src="https://wallsdesk.com/wp-content/uploads/2016/10/Pictures-of-Pantera-.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h1 className="card-title">
            {" "}
            <strong>Zaraf-home</strong>
          </h1>
          <p className="card-text">
            Welcome to the <strong>Zaraf-home</strong> here we build community.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
          <button type="button" className="btn btn-secondary">
            Load more
          </button>
        </div>
        </div>
    </div>
  );
}

export default Intro;
