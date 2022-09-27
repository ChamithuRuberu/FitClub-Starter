import './App.css';
import Hero from "./component/Hero/hero";
import Program from "./component/programs/program";
import Reasons from "./component/reasons/reasons";

function App() {
    return (
        <div className="App">
        <Hero/>
            <Program/>
            <Reasons/>
        </div>
    );
}

export default App;
