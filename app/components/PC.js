import React from "react";
import Picture from "./picture"
// import { Dropdown } from 'semantic-ui-react'

let key = true;

const PC = (props) => {
  let param =
  <>
    <div className="menu">
      <header className="blockMenu">
        <div className="site-logo">
          <a href="/MOBILE">ANDREY MARKUSHEVSKY</a>
        </div>
        <nav>
          <ul className="group">
            <li>Works</li>
            <li>Automotive</li>
            <li>People</li>
            <li>Nature</li>
            <li>Architecture</li>
          </ul>
          <div>
            <p>About Me</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </nav>
      </header>
    </div>
  </>
  let footer = 
  <footer>
    <p>Create by myself with love...</p>
  </footer>
  
  if (key === false) { 
    return (
      <>
      {param}
      {footer}      
      </>
  )} else { return (
    <>
      <div className="main">
      {param} 
      <Picture/>
      </div>
      {footer}
    </>
  ) }
}
 
export default PC;