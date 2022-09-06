import data from './data';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      
      <Card isInStock={true} data={data}/>
      <Card isInStock={false} data={data}/>
    </div>
  );
}

export default App;
