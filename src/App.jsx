import Logo from "./components/logo/Logo"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <Logo/>
    <Main/>
    <Footer/>
  </div>
  );
};

export default App;