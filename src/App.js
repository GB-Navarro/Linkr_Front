import GlobalStyle from "./assets/styles/globalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage.js";
import SignUpPage from "./components/SignUp/SignUpPage.js";
import Timeline from "./components/Timeline/Timeline.js";
import UserPage from "./components/UserPage/UserPage.js";
import UserContext from "./contexts/UserContext.js";
import TokenContext from "./contexts/TokenContext.js";
import { useState } from "react";

export default function App() {

  const [userData, setUserData] = useState({
    userId:"",
    userImageUrl:"",
  });
  const [token,setToken] = useState("");

  return (
    <>
      <GlobalStyle />
      <TokenContext.Provider value={{token, setToken}}>
        <UserContext.Provider value={{userData, setUserData}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/timeline" element={<Timeline />}></Route>
              <Route path="/user/:id" element={<UserPage />}></Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </TokenContext.Provider>
    </>
  );
}
