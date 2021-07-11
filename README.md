# Amazon-Clone-
A amazon-clone website using react. 

[Part 1 – Getting set up]
•	Make sure Node.js is installed.

•	Bring up the terminal and then use the code npx create-react-app amazon-clone.

•	Next, use firebase, go to console in the top right, add project and call It amazon-clone. 
If firebase isn’t working move on for bit to next step.

•	When npx says happy hacking, type cd amazon-clone, then npm start to bring up local host if signal is lost.
You should only have the amazon clone folder in Explorer. You should see the spinning react logo.

•	In firebase, click the “</>” thing, type the name of your project and check box, 
click next then open a new terminal “+”, and copy and paste npm install -g firebase-tools, press enter & next.

•	Continue to console, and on firebase in the top left corner, click the cogwheel and go to project settings, 
scroll down and click the circle config, then copy the code.

•	Back in VS, in the “src” folder, create a new file and call it firebase.js
and paste the code you just copied in there and save it. 


[Part 2 – The Home Page]
•	In vs, delete: App.test.js, logo.svg, & setupTests.js, 
then go to App.js and delete everything inside the <div> which is the header from top to bottom,
and use <h1></h1> to say hey let’s build the amazon store and delete the line 2 import logo.svg”; at the top and save.

•	Next, in vs go into App.css and delete all the code. In index.css, at the top, add * { margin: 0;}. 

•	In App.js under “return (“ but above the <div classname=”app”>,  type // BEM.

•	Next comment {/*Header*/} and {/*Home*/}. Next in the src folder, create a file named Header.js. 
next go over to extensions and type in es7 react/redux. 
(if you can’t find this in the marketplace then just type everything manually… who cares). 

•import React from 'react'
import './Header.css'

    function Header() {
        return (
            <div className='header'>
                <img
                className="header__logo"

                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

                <div
                    className="header__search">
                    <input
                        className="header__searchInput" type="text" />
                    {/* Logo */}
                </div>

                <div className="header__nav">
                    <div className="header__option">
                    <span
                    className="header__optionLineOne">
                    Hello Guest</span>
                    <span
                    className="header__optionLineTwo">
                    Sign In</span>
                </div>


                <div className="header__option">
                    <span
                    className="header__optionLineOne">
                    Returns</span>
                    <span
                    className="header__optionLineTwo">
                    & Orders</span>
               </div>


               <div className="header__option">
                    <span
                    className="header__optionLineOne">
                    Your</span>
                    <span
                    className="header__optionLineTwo">
                    Prime</span>
               </div>
                  
                  </div>
                <div
            </div> 
        );
    }

export default Header


• After that, go to the app.js tab and do this,

import React from "react";
import "./App.css";
import Header from './Header';

function App() {
    return (
        // BEM
    <div className="App">
          <h1>Hello Dre, let's build the
              Amazon store! </h1>
            <Header />
            {/* Home */}
    </div>
  );
}

export default App;

•After that, click on the HEader.css to start styleing the words.

•

•

•

•

•


