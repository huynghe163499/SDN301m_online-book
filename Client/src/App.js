// import DefaultLayout from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './app.css'
import FollowPage from "./pages/FollowPage";
import GenrePage from "./pages/GenrePage";
import RankPage from "./pages/RankPage";
import TrangDanhMuc from "./pages/TrangDanhMuc";
import NotiFicationPage from "./pages/NotiPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/theo-doi"  element={<FollowPage/>}/>
          <Route path="/the-loai"  element={<GenrePage/>}/>
          <Route path="/xep-hang"  element={<RankPage/>}/>
          <Route path="/danh-muc"  element={<TrangDanhMuc/>}/>
          <Route path="/thong-tin"  element={<NotiFicationPage/>}/>
        </Routes>
      </BrowserRouter>

</div>
  );
}


export default App;
   
