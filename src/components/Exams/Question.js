import "./Question.css"
import CountQ from "./CountQ";
import Timer from "./Timer";
function Question(){
    return <>
    <div className="q-cont">
        <h3>What is your name?</h3>
        <div className="option">
            <input type="radio" id="ss4" value="option "/>
            <label htmlFor="ss4">Option A</label>
        </div>
        <div className="option">
            <input type="radio" id="ss3" value="option1 "/>
            <label htmlFor="ss3">Option B</label>
        </div>
        <div className="option">
            <input type="radio" id="ss2" value="option1 "/>
            <label htmlFor="ss2">Option B</label>
        </div>
        <div className="option">
            <input type="radio" id="ss1" value="option1 "/>
            <label htmlFor="ss1">Option B</label>
        </div>
        <button className="prev">Previous</button>
        <button className="next">Next</button>
        {/*<button className="submit">Submit</button>*/}

    </div>
    <CountQ/>
    <Timer />
    <div className="fns">
    <button className="fnsb"><h3>Finish Test</h3></button>
    </div>
    </>



}
export default  Question;