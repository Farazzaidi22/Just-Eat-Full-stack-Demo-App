import './App.css';

import React from 'react';
import { Routes, Route  } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './redux/features/postSlice';



import Home from './pages/home-page/home-page.component';


function App() {

  //ts-ignore
  const {posts, loading} = useSelector((state) => state.post)

  const dispatch = useDispatch()

  React.useEffect( () => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">

    <Routes>
        <Route path='/' element={ <Home posts={posts}/> }/>
    </Routes>

    </div>
  );
}

export default App;
