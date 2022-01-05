import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// page components
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';


function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
       <BrowserRouter>
       {user && <Sidebar/>}
       <div className='container'>
         <Navbar/>
         <Routes>
         <Route path="/" element={user ? <Dashboard /> : <Navigate replace to="/login"/>}/>
         <Route path="/create" element={user ? <Create /> : <Navigate replace to="/login"/>}/>
         <Route path="/login" element={user ? <Navigate replace to="/"/> : <Login />}/>
         <Route path="/signup" element={user ? <Navigate replace to="/"/> : <Signup />}/>
         <Route path="/projects/:id" element={user ? <Project /> : <Navigate replace to="/login"/>}/>
       </Routes>
       </div>
       {user && <OnlineUsers/>}
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
