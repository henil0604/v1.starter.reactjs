import "@/assets/css/global.scss";
import { Routes, Route } from "react-router-dom";
import PAGE_Root from "@pages/Root";
import PAGE_About from "@pages/About";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PAGE_Root />} />
        <Route path='about' element={<PAGE_About />} />
      </Routes>
    </div>
  );
}

export default App;
