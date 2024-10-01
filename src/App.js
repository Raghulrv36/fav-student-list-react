import './App.css';
import { useState } from 'react';
import StudentList from './StudentList';
import FavoriteList from './FavoriteList';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';



function App() {

  // Initial list of student
  const [students, setStudents] = useState([
    { id: 1, name: 'Akshay' },
    { id: 2, name: 'Lily' },
    { id: 3, name: 'Rocky' },
    { id: 4, name: 'Naveen' },
    { id: 5, name: 'Vetri'},
    { id: 6, name: 'Maran'}
  ]);

  // State to track favorite students
  const [favorites, setFavorites] = useState([]);

   
 


  return (
    
      <BrowserRouter>
      <div className='bg-[#6c6af8] flex justify-center gap-10 p-10'>
        <h2 className='text-lg text-white font-bold '><Link to={'/StudentList'}>Student List</Link></h2>
        <h2 className='text-lg text-white font-bold '><Link to={'/FavoriteList'}>Favorite List</Link></h2>
      </div>
      
      <Routes>
        {/* most-important root file path is more important for page navigations */}
        <Route path='/StudentList' element={<StudentList students={students} setStudents={setStudents} favorites={favorites} setFavorites={setFavorites} />}></Route>
        <Route path='/FavoriteList' element={<FavoriteList students={students} setStudents={setStudents} favorites={favorites} setFavorites={setFavorites}  />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;