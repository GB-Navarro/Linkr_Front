import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle.js"
import Timeline from "./components/Timeline/Timeline.js";
import HashtagPage from '../components/HashtagPage/HashtagPage.jsx';

export default function App() {
  const [update, setUpdate] = useState(false)
  
  const HashtagHolder = () => {
    const {hashtag} = useParams()
    return <HashtagPage key={hashtag} updateState={[update, setUpdate]}/>
  }
    
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Timeline />}></Route>
          <Route path='/hashtag/:hashtag' element={ <HashtagHolder /> } />
        </Routes>
      </BrowserRouter>
      
      
    </>  
  );
}

