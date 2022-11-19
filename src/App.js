import './App.css';
import Hero from "./component/Hero/hero";
import Program from "./component/programs/program";
import Reasons from "./component/reasons/reasons";
import Plan from "./component/plans/plan";
import Testimonial from "./component/Testimonial/testimonial";
import Datacollect from "./component/DataCollect/datacollect";
import Footer from "./component/Footer/footer";

function App() {
    return (
        <div className="App">
        <Hero/>
            <Program/>
            <Reasons/>
            <Plan/>
            <Datacollect/>
            <Footer/>
        </div>
    );
}

export default App;
