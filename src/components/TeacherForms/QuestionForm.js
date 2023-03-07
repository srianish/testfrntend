import "./QuestionForm.css"
import CountQ from "./CountQ";

function QuestionForm(){
    return <>
    <div className="q-cont">
        <h3 className="headd"> <input type="text" className="inputA" placeholder="Enter A Question...!!!" /> </h3>
        <div className="option">
            <input type="radio" id="ss4" value="option "/>
            <label htmlFor="ss4"><input type="text" className="inputB"  placeholder="Option A" /></label>
        </div>
        <div className="option">
            <input type="radio" id="ss3" value="option1 "/>
            <label htmlFor="ss3"><input type="text" className="inputB" placeholder="Option B" /></label>
        </div>
        <div className="option">
            <input type="radio" id="ss2" value="option1 "/>
            <label htmlFor="ss2"><input type="text" className="inputB" placeholder="Option C" /></label>
        </div>
        <div className="option">
            <input type="radio" id="ss1" value="option1 "/>
            <label htmlFor="ss1"><input type="text" className="inputB" placeholder="Option D" /></label>
        </div>
        <button className="prev">Previous</button>
        <button className="next">Next</button>
        {/*<button className="submit">Submit</button>*/}

    </div>
    <CountQ/>
    
   
    </>



}
export default  QuestionForm;