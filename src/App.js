
//import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css';
import Principal from '../src/components/principal';
import ArticleDetail from '../src/components/articleDetail';
import ColumnDetail from '../src/components/columnDetail';
import PrincipalCategory from '../src/components/principalCategory';
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
               <Route path="/col/:id" element={<ColumnDetail/>}/>
               <Route path="/cat/:id" element={<PrincipalCategory/>}/>



           </Routes>
         </div>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
