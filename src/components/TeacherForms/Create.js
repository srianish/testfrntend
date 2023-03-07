import CardGrid from "./CardGrid";
import "./Create.css"
function Create(){
    return <div>
        <div className="crt"> 
            <button className="btn2"><h2> Create a Test </h2></button> 
        </div>
        <CardGrid/>
        <h1 className="h111">Your Creations <img src="right.png" height="40px" width="40px" alt="#"/><img src="right.png" height="40px" width="40px" alt="#"/> </h1>
        </div>
}
export default Create;
