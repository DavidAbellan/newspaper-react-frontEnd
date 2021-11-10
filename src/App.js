
//import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css';
import Principal from '../src/components/principal';

function App() {
  return (

    <Principal/>
    /*<div className="App">
      <BrowserRouter>
         <div>
            <Routes>
               <Route path="/" component={Principal} exact />
           </Routes>
         </div>
     </BrowserRouter>
     
    </div>*/
  );
}

export default App;
