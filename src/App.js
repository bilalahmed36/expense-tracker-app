import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='container-fluid bg-warning h-100'>
     <div> 
     Hello <strong>Bilal Ahmed</strong>
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
       <div>
       Addition {2+5}
      <br />
      Subtraction {2-1}
      <br />
      Multiplication {3*3}
      <br />
      Division {10/2}
      <br />
      Percentage {20%3}
       </div>
       
       </div>
      
      
     
    </div>
  );
}

export default App;
