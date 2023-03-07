import "./NavBar.css"

function NavBar(){
    return <ul>
      <li><a href="#home">Home</a></li>
      
      <li style={{ float :"right"}}><a className="active" href="#about">Account</a></li>
    </ul>
}

export default NavBar;