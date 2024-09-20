import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TheFooter.styles.scss";
import { useContext } from "react";

const TheFooter = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                En la red social <i> ARNOLD</i> , Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Phasellus finibus, lectus et ultrices feugiat, ligula neque venenatis est, non
                tristique nibh mauris ut nisl. Phasellus vel nisi imperdiet, tincidunt leo at,
                interdum mi. Sed dignissim nibh sit amet odio sollicitudin, et sodales ex mollis.
                Etiam sit amet venenatis orci, vitae semper leo. Morbi a orci congue, auctor lacus
                mattis, malesuada velit. Aliquam tristique purus vitae ullamcorper hendrerit. Donec
                varius elementum orci, sit amet congue nisl consectetur sit amet. Suspendisse sit
                amet dignissim nulla.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Juguetes</a>
                </li>
                <li>
                  <a href="#">Hogar</a>
                </li>

                <li>
                  <a href="#">Pintura</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="nav-menu-link">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by
                <a href="#">Arnold</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
