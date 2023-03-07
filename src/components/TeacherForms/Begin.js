import "./Forms.css";

function Begin(){
    return  <div className="container">
        <h1>Fill the Details</h1>
        <input type="text" placeholder="Enter Category" className="f-input"/>
        <br/>
        <input type="text" placeholder="Enter Subject"  className="f-input"/>
        <br/>
        <input type="text" placeholder="Enter Topic" className="f-input"/>
        <br/>
        <input type="number" placeholder="Enter Cost in Rupees"  className="f-input"/>
        <br/>
        <br/>
        <button className="btn-l">Proceed</button>
    </div>
    
}
export default Begin;