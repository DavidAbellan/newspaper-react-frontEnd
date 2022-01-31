
//import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css';
import Principal from '../src/components/principal';
import ArticleDetail from '../src/components/articleDetail';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (

   // <Principal/>
    <div className="App">
      <BrowserRouter>
         <div>
            <Routes>
               <Route path="/" element={<Principal/>} exact />
               <Route path="/art/:id" element={<ArticleDetail/>}/>
           </Routes>
         </div>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
