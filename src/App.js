import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [data, setData] = useState();
  const fechtApi =async () => {
    const response = await fetch(url);
    
    const dataJson = await response.json();
    setData(dataJson);
    //console.log(data);
  }
  useEffect(() => {
    fechtApi();
  }, [])
  return (

    <div className="App"> 
      {
        data?data.map(item => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.completed}</p>
            </div>
          )
        }):"Loading..."
      }
    </div>
  );
}

export default App;
