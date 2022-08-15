import GlobalStyle from "./assets/styles/globalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "./components/SignIn/SignInPage.js";
import SignUpPage from "./components/SignUp/SignUpPage.js";
import Timeline from "./components/Timeline/Timeline.js";
import UserPage from "./components/UserPage/UserPage.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/timeline" element={<Timeline />}></Route>
          <Route path="/user/:id" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
