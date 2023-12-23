import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Nav from './Components/Nav'
import Home from './Components/Home';
import Bookmark from './Components/Bookmark';
import Profile from './Components/Profile';
import ArticleData from './Components/ArticleData';
export default function App() {

const queryClient = new QueryClient();


  return (
 <QueryClientProvider client={queryClient}>

    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/:author" element={<ArticleData />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
  )
}