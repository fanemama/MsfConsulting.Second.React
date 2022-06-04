import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './components/courses/CoursesPage';

function App() {
  return (
    <div className="container-fluid">
     <Header />
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="*" element={<PageNotFound/>} /> 
        </Routes>
    </div>
  );
}

export default App;
