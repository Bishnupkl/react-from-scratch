import React    from "react";
// import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import App from './App';

// const App=()=>{
//     return <h1>This is a react script</h1>
// }

const container = document.getElementById('root');
const root =createRoot(container);

root.render(<App message="I love you Puku" />);
// root.render(React.createElement(App));
