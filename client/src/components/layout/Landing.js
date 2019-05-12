import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
            <div className="col s12 center-align">
                <h4>
                    <b>Aplikacja</b> do logowania i autoryzacji użytkownika.{" "}
                </h4>
                <p className="flow-text grey-text text-darken-1">
                    Wykorzystuje <b>Node, React, Redux, MongoDB </b> do autoryzacji przez 
                    <b> Passport JWTs </b>
            </p>
                <br />
                <Link to="/register" style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                    Rejestracja
                </Link>
                <Link to="/login" style={{ marginLeft: "2rem", width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }}
                    className="btn btn-large waves-effect white hoverable black-text">
                    Logowanie
                </Link>
            </div>
        </div>
    </div>
);

export default Landing;