import React from "react";
// import { Dropdown } from 'semantic-ui-react'

const PC = (props) => {
  return (
    <>
      <div className="main">
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
              <li>City</li>
            </ul>
            <div>
              <p>About Me</p>
            </div>
            <div>
              <p>Contact</p>
            </div>
          </nav>

        </header>
        <section className="img">
          <div>
            <img src="https://sun9-30.userapi.com/c848620/v848620622/1cc8b7/mELXdJcRja4.jpg" width="505px" alt="img"></img>
          </div>
          <div>
            <img src="https://sun9-30.userapi.com/c848620/v848620622/1cc8b7/mELXdJcRja4.jpg" width="505px" alt="img"></img>
          </div>
          <div>
            <img src="https://sun9-30.userapi.com/c848620/v848620622/1cc8b7/mELXdJcRja4.jpg" width="505px" alt="img"></img>
          </div>
          <div>
            <img src="https://sun9-30.userapi.com/c848620/v848620622/1cc8b7/mELXdJcRja4.jpg" width="505px" alt="img"></img>
          </div>

        </section>
      </div>
      <footer>
        <p>Create by myself with love</p>
      </footer>
    </>
  )
}
 
export default PC;