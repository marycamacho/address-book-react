import React from 'react';
import AddressBook from './jsx/address_book.jsx';
var ReactDom = require('react-dom');


ReactDom.render(

    <div>
        <div className='header'>
            <h1 className="text-center">Mary's Address Book with React</h1>
             <div className="container headerBtns">

             </div>

        </div>
         <div class="prettyBG">
             <div className="container">
                <div className="panel panel-default well top_40">
                    <AddressBook/>
                </div>
             </div>
        </div>
        <div className="footer">

        </div>


    </div>
    ,document.getElementById('app'));


