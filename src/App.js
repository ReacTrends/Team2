import logo from './logo.svg';
import './App.css';
import MainNavbar from './Components/Navbar/MainNavbar'
import Alerts from './Components/Alerts/Alerts'
import InstanceAlert from './Components/InstanceAlert/InstanceAlert'
import './fontawesome';
function App() {
  return (
    <div className="App">
 <MainNavbar/>
 <Alerts/>
 <div className="col-sm-6">
 <InstanceAlert/>
 </div>
    </div>
  );
}

export default App;
