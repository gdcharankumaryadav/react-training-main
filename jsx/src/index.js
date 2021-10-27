import React from 'react';
import ReactDom from 'react-dom';

//create react component
const App = function(){
    var buttonname = 'Click me';
    var lblText = 'Enter your name';
    return (
     <div>
         <label htmlFor='name'>
             {lblText}
         </label>
         <input type="text"  id='name' />
         <button type="submit" style={{ backgroundColor : '#03a9f4', color : 'white', border: '0px', padding: '10px', marginLeft: '10px'}}>
           {buttonname}
         </button>
     </div>
    );
}

//Take react component and show it on the screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);

//Reload problem fix
if (module.hot) {
    module.hot.accept();
  }