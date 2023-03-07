import "./Forms.css";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../Context";
function Register(){
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [role, setRole ]= useState({student : false, teacher : false, admin : false})

    const [tc,setTC] = useContext(Context)
    return    <div className="container">
        <h1>Please Register</h1>
        <input type="text" placeholder="Enter Your Name" className="f-input" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <input type="email" placeholder="Enter Email" className="f-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Enter Password"  className="f-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Re-enter Password"  className="f-input"/>
        <br/>
        <br/>
        <input type="radio" id="ss2" value="student" onChange = {()=>setRole({student: true, teacher: false, admin: false,role : "student"} )} checked={role.student}/>
        <label htmlFor="ss2">Student</label>
       
        <input type="radio" id="ss2" value="teacher" onChange={()=>setRole({student: false, teacher: true, admin: false, role : "teacher"} )} checked={role.teacher}/>
        <label htmlFor="ss2">Teacher</label>
       
        <input type="radio" id="ss2" value="admin"  onChange= {()=>setRole({student: false, teacher: false, admin: true, role : "admin"})} checked={role.admin}/>
        <label htmlFor="ss2">Admin</label>
        <br/>
        <br/>
        <button className="btn-l" onClick={()=>axios.post("https://srianish-curly-goggles-7qg6vvvrjq7hrxpw-3000.preview.app.github.dev/api/auth/signup",{
    name: name,
    email:email,
    password:password,
    role: role.role
}).then((res)=>{
    setTC(res.token);
    console.log("tc = "+tc);
    console.log(res)})
  .catch((err)=>console.log(err))}>Register</button>
    </div>
    
}
export default Register;