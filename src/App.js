import Login from "./components/Forms/Login"
import Register from "./components/Forms/Register";
import Forgot from "./components/Forms/Forgot";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/Home/NavBar";
import CardGrid from "./components/Home/CardGrid";
import SubjectCard from "./components/Exams/SubjectCard";
import Question from "./components/Exams/Question";
import Routess from "./components/Routess";
import QuestionForm from "./components/TeacherForms/QuestionForm";
import Create from "./components/TeacherForms/Create";
import Begin from "./components/TeacherForms/Begin";
import YourTests from "./components/YourTests/YourTests";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import PurchaseCoins from "./components/Payments/PurchaseCoins";
import AdminDash from "./components/Admin/AdminDash";
import Context from "./Context"
import { useState } from "react";
import TopicGrid from "./components/Exams/TopicGrid";
function App(){
  
  const [tc, setTC] = useState("")

  return <Context.Provider value={ [tc, setTC]}>
    <BrowserRouter>
            <NavBar />
            <Routes>
                  <Route path="/login"  element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/forgot" element={<Forgot/>} />
                  <Route path="/home" element={<CardGrid/>} />
                  <Route path="/subjects" element={<SubjectCard/>} />
                  <Route path="/qstn" element={<Question/>} />
                  <Route path="/qstnfrm" element={<QuestionForm/>}  />
                  <Route path="/create" element={<Create/>}  />
                  <Route path="/beginform" element={<Begin/>}/>
                  <Route path="/routes" element={<Routess/>} />
                  <Route path="/yourtests" element={<YourTests/>}/>
                  <Route path="/leaderb" element={<LeaderBoard/>} />
                  <Route path="/payments" element={<PurchaseCoins/>}/>
                  <Route path="/admindash" element={<AdminDash/>} />
                  <Route path="/topic" element={<TopicGrid/>}/>
            </Routes>
  </BrowserRouter>
  </Context.Provider>
}
export default App;
