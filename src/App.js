import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Membership from './component/Membership/Membership';
import Membershiplong from './component/MembershipLong/Membershiplong';
import Request from './component/Request/Request';
import Service from './component/Service/Service';
import Start from './component/Started/Start';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Start/>
      <Membership/>
      <Service/>
      <Membershiplong/>
      <Request/>
      <Footer/>
    </div>
  );
}

export default App;
