import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className={`nav-link ${(window.location.href).match("/business")?"active":null}`} href="/business">Business</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${(window.location.href).match("/entertainment")?"active":null}`} href="/entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${(window.location.href).match("/health")?"active":null}`} href="/health">Health</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${(window.location.href).match("/science")?"active":null}`} href="/science">Science</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${(window.location.href).match("/sports")?"active":null}`} href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                <a className={`nav-link ${(window.location.href).match("/technology")?"active":null}`} href="/technology">Technology</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
