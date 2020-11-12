import logo from './logo.svg';
import CardContainer from './components/CardContainer'
import './App.css';

const team = [
  {id: 1, firstName: "John", lastName: "Roku"},
  {id: 2, firstName: "Rakesh", lastName: "Singh"},
  {id: 3, firstName: "Julie", lastName: "Eaker"},
  {id: 4, firstName: "Carla", lastName: "Sanchez"},
  {id: 5, firstName: "Javier", lastName: "Smith"},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Cards Demo</h1>
        <CardContainer team={ team } />
      </header>
    </div>
  );
}

export default App;
