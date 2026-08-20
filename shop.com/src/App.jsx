import HeroSection from './components/HeroSection';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import NewArrivals from './components/NewArrivals';
import Topselling from './components/Topselling';
import DressStyle from './components/DressStyle';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <react/>
      <Brands />
      <NewArrivals />
      <Topselling/>
      <DressStyle />
      <Testimonials/>
      <Newsletter/> 

      {/* Baqi sections aap yahan aage add kar sakte hain */}
    </div>
  );
}

export default App;