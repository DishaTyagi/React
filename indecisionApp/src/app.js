import React from 'react';
import ReactDOM from 'react-dom';
import {IndecisionApp} from './components/IndecisionApp.js';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>hi i am header</p>
//             {props.children}        
//             <p>hi i am footer</p>
//         </div>
//     )
// }

// ReactDOM.render((
//     <Layout>
//         <div>   
//             <h2>title</h2>
//             <h3>i am the content</h3>
//         </div>
//     </Layout>
//     ), document.getElementById('appDiv')
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('appDiv'));