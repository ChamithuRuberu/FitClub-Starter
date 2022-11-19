import './App.css';
import Hero from "./component/Hero/hero";
import Program from "./component/programs/program";
import Reasons from "./component/reasons/reasons";
import Plan from "./component/plans/plan";


function App() {
    return (
        <div className="App">
        <Hero/>
            <Program/>
            <Reasons/>
            <Plan/>

        </div>
    );
}

export default App;
