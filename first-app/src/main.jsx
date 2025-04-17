import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';




function Hi({nam,age,job}){
    return <>
  <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1>Hello {nam}</h1>
    <h1>First Heading age: {age}</h1>
    <h2>Second Heading</h2>
    {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}

      <button className="btn btn-danger">Delete</button>
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

// const props = {name: 'Zahid',age: 29}


// const {name,age} = obj;

