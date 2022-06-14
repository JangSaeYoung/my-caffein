import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home/Home';
import CampDetail from './pages/CampDetail/CampDetail';
import CommunityDetail from './pages/ComunityDetail/CommunityDetail';
import GlobalStyled from "./styles/global";




const App = () => {
  return (
    <>
    <GlobalStyled />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CampDetail" element={<CampDetail />} />
      <Route path="/CommunityDetail" element={<CommunityDetail />} />
    </Routes>
    </>
  );
};

export default App;
