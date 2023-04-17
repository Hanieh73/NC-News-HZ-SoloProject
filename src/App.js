import './App.css';
import Article from './Components/Article';
import ArticleList from './Components/ArticleList';
import ArticleTopics from './Components/ArticleTopics';
import Header from './Components/Header'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';





function App() {
   
  const [user, setUser] = useState({})
  

  return (
  <div className='App'>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={
          <div>
            <ArticleTopics/>
             <ArticleList/>
          </div>
        }
        />
        <Route
          path='/articles/:article_id' element={
            <Article
            />
          }
        />
    
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
      
</div>
  )
}

export default App;
