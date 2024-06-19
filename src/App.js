//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>

        <Navbar title="Text Convertor App" aboutText="Search"/>
        <div className="container my-3">
          <TextForm heading="Enter the text here " />
        </div>

    </>

  );
}
export default App;
