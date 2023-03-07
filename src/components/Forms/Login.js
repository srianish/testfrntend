import "./Forms.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context";
function Login(){
    const [tc,setTC] = useContext(Context)
    return    <div className="container">
        <h1>Please Login</h1>
        <input type="email" placeholder="Enter Email" className="f-input"/>
        <br/>
        <input type="password" placeholder="Enter Password"  className="f-input"/>
        
        <br/><br/>
        
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Student</label>
       
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Teacher</label>
       
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Admin</label>
        
        <h5><Link to="/forgot" >Forgot Password ?</Link> </h5>
        <button className="btn-l">Login</button>
        <h5>New User ? <Link to="/register" >Register</Link></h5>
    </div>
    
}
export default Login;