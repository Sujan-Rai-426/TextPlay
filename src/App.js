
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (

    <>
    
      <Navbar title='TextGrounds'/> 

      <div className="container my-3">
        <TextForm heading='Enter your text message below in textPlay Ground field'/>
      </div>

    </>

  );
}

export default App;
