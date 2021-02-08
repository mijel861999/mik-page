import './App.css';

//React
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages
import Landing from './pages/Landing';
import Dev from './pages/Dev';
import Music from './pages/Music';
import Frontend from './pages/Frontend';
import Unity from './pages/Unity';
import Backend from './pages/Backend';
import Beats from './pages/Beats';
import Playlist from './pages/Playlist';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/dev" component={Dev}/>
          <Route exact path="/music" component={Music}/>
          <Route path="/dev/frontend" component={Frontend}/>
          <Route path="/dev/backend" component={Backend}/>
          <Route path="/dev/unity" component={Unity}/>
          <Route path="/music/beats" component={Beats}/>
          <Route path="/music/playlist" component={Playlist}/>
          
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
