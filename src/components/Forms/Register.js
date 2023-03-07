import "./Forms.css";

function Register(){
    return    <div className="container">
        <h1>Please Register</h1>
        <input type="text" placeholder="Enter Your Name" className="f-input"/>
        <br/>
        <input type="email" placeholder="Enter Email" className="f-input"/>
        <br/>
        <input type="password" placeholder="Enter Password"  className="f-input"/>
        <br/>
        <input type="password" placeholder="Re-enter Password"  className="f-input"/>
        <br/>
        <br/>
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Student</label>
       
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Teacher</label>
       
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Admin</label>
        <br/>
        <br/>
        <button className="btn-l">Register</button>
    </div>
    
}
export default Register;