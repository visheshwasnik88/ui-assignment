import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './pages/HeroSection';
import FeatureOptionSection from './pages/FeatureOptionSection';
import MemberStorySection from './pages/MemberStorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <FeatureOptionSection/>
      <MemberStorySection/> 
      <Footer/> 
    </div>
  );
}

export default App;
