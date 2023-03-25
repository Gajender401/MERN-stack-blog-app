import './App.css';
import {Routes,Route,BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import ArticlesList from './pages/articlesList';
import Articles from "./pages/articles"
import About from "./pages/about"
import Navbar from './navbar';
import NotFound from './pages/notFound';
import Login from './pages/login'
import CreateAccount from './pages/createAccount';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div id='page-body' >
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/articles' element={<ArticlesList />} />
      <Route path='/articles/:articleId' element={<Articles />} />
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/create-account" element={<CreateAccount />} />

    </Routes>
    </div>

    </BrowserRouter>

  );
}

export default App;
