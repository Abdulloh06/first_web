import HomeWidget from './components/Home/HomeWidget';
import Features from './components/Features/Features';
import Stories from './components/Stories/Stories';
import Achievements from './components/Achievements/Achievements';
import Manage from './components/Manage/Manage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="stack">
        <div className="blur-circle"></div>

        <HomeWidget />
        <Features />
        <Stories />
        <Achievements />
        <Manage />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
