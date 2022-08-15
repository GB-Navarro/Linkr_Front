import GlobalStyle from "./assets/styles/globalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage.js";
import SignUpPage from "./components/SignUp/SignUpPage.js";
import Timeline from "./components/Timeline/Timeline.js";
import UserContext from "./contexts/UserContext.js";
import { useState } from "react";
export default function App() {

  const [userData, setUserData] = useState({
    userId:"",
    userImageUrl:"",
    token:""
  });

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/timeline" element={<Timeline />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      
    </>
  );
}
