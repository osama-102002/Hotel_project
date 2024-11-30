import SubNavbar from './Components/Nav/subNav';
import MainNav from './Components/Nav/mainNav';
import Cards  from './Components/cards/cards';
import './App.css';
import Destenation from './Components/DestinationPage/Destenation';
import ContactUs from'./Components/contactUsPage/contactUs'

function App() {
  return (
    < >

    <SubNavbar/>
    <MainNav/>
  <div className="hero-section">
      <div className="text-center content">
        <h1 style={{ fontFamily: 'Gloss And Bloom' }}>Memories for life</h1>
        <p style={{ fontSize: '100px' }}>Let's Explore the world</p>
      </div>
    </div>
    <div className="pageTitle">
      <h1 className="pageHeader">Welcome to Our Journey</h1>
      <div>Discover Now</div>
    </div>
   
    </>
  );
}

export default App;
