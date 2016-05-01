import React from 'react';
import AddressBook from './jsx/address_book.jsx';
var ReactDom = require('react-dom');

var initialData = [
    {
        fName: "Mary",
        lName: "Camacho",
        imgUrl: "http://brainstorminonline.com/wp-content/uploads/2011/12/Mary-Camacho.jpg",
        email: "mary@marycamacho.com",
        phone: "303-669-6516"
    }
];
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


