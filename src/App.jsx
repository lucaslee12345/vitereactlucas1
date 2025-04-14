import Header from './Header.jsx';
import Footer from './Footer.jsx'
import Stuff from './Stuff.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from './Clock.jsx'; 
function App(){
  return(
    <>
      <Header/>
      <MyDemo/>
      <Stuff name="Bob Smith" title="CEO"/>
      <Stuff name="Sue Jones" title="CFO"/>
      <Stuff/>
      <Stuff/>
      <Clock/>
      <Footer/>
    </>
  );
}
export default App
