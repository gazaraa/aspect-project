import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();



  const onButtonClick = () => {
  };

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <Link to="/login">
          <input
            className={"Bttn"}
            type="button"
            onClick={null}
            value={loggedIn ? "Log out" : "Log in"}
          />
        </Link>
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
      {loggedIn ? <div /> : <div className={"buttonContainer"}>
        <Link to="/register">
          <input
            className={"Bttn"}
            type="button"
            onClick={null}
            value="Register"
          />
        </Link>
      </div>}


    </div>
  );
};

export default Home;
