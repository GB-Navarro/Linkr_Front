import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle.js"
import Timeline from "./components/Timeline/Timeline.js";
export default function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Timeline />}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </>  
  );
}

