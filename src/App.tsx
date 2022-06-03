import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import CampDetail from './pages/CampDetail';
import CommunityDetail from './pages/CommunityDetail';



const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home title={''} camps={[]} />} />
      <Route path="/CampDetail" element={<CampDetail />} />
      <Route path="/CommunityDetail" element={<CommunityDetail />} />
    </Routes>
    </>
  );
};

export default App;
