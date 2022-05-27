import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const url = ' https://dog.ceo/api/breeds/list/all';
  const [data, setData] = useState([]);
  const fechtApi =async () => {
    const response = await fetch(url);
    const dataJson = await response.json();
    setData(dataJson.message);
    console.log(data);
    
  }  
  useEffect(() => {
    fechtApi();
  }, [])
  return (

    <div className="App">
      hola mundo
    </div>
  );
}

export default App;
