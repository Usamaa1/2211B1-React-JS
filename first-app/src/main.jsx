import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';


function Hi({nam,age,job}){
    return <>
    <h1>Hello {nam}</h1>
    <h1>First Heading age: {age}</h1>
    <h2>Second Heading</h2>
    </>
 
}

let rootElement = document.getElementById('root');

const root = createRoot(rootElement)
root.render(<div>
<Hi nam='Arif Alvi' age={45} />
<Hi nam='Zakir' age={34} />
<Hi nam='Haris' age={44} />
<Hi nam='Fawad' age={32} />

</div>)

const props = {name: 'Zahid',age: 29}


const {name,age} = obj;

