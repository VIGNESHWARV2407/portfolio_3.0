import './App.css';
import WelcomeBoard from './Other_CSS/WelcomeBoard';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Achievements from './Components/Achievements';
function App() {
    return (
        <div className="App">
            <Navbar />
            <WelcomeBoard />
            <Profile />
            <div class="main_content">
                <About />
                <Skills />
                <Projects />
                <Achievements/>
            </div>
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
