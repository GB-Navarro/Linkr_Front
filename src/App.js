import GlobalStyle from "./assets/styles/globalStyle.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from "./components/SignInPage.js";
import SignUpPage from "./components/SignUpPage.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
