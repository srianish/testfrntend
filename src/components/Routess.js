import { Link } from "react-router-dom"

function Routess(){
    return <div>
        <br/><br/><br/><br/>
        <Link to="/login">Login Page</Link><br/>
        <Link to="/register" >Register Page</Link><br/>
        <Link to="/forgot" >Forgot Page</Link><br/>
        <Link to="/home" >Home Page</Link><br/>
        <Link to="/qstn" >Question Page</Link><br/>
        <Link to="/subjects" >Subjects Page</Link><br/>
        <Link to="/create" >Create Page</Link><br/>
        <Link to="/qstnfrm" >Questions Form Page</Link><br/>
        <Link to="/beginform" >Begin Form Page</Link><br/>
        <Link to="/yourtests">Your Tests</Link><br/>
        <Link to="/leaderb">LeaderBoard</Link><br/>
        <Link to="/admindash">Admin Dash Board</Link><br/>
        <Link to="/payments">purchasecoins</Link><br/>
        <Link to="/topic" >Topic </Link>
    </div>
}
export default Routess;