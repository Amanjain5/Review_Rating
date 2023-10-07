import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from "./reviewapp/components/Page404";
import Login from "./reviewapp/components/auth/Login";
import Signup from "./reviewapp/components/auth/Signup";
import Protected from "./reviewapp/components/RouteProtect";
import CompanyList from "./reviewapp/components/company/CompanyList";
import CreateCompany from "./reviewapp/components/company/CreateCompany";
import CompanyDetails from "./reviewapp/components/company/CompanyDetails";
import Forgotpassword from "./reviewapp/components/auth/ForgotPassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Page404/>}/>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/createcompany" element={<Protected Component = {CreateCompany}/>}/>
          <Route path="/companylist" element={<CompanyList/>}/>
          <Route path="/companydetail" element={<CompanyDetails />}/>
          <Route path="/forgotpassword" element={<Forgotpassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;



















{
  /* <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route> */
}

{
  /* <Route path="/" element={<Home />} />
          <Route path="/coders/" element={<Coders />}>
            <Route path="node" element={<Node />} />
            <Route path="reactPage" element={<ReactPage />} />
            <Route path="placement" element={<Placement />} />
          </Route> */
}

// import "./App.css";
// import AddUser from './components/user/Usersignup';
// import Coders from "./components/user/Coders";
// import Node from "./components/user/Node";
// import Placement from "./components/user/Placement";
// import ReactPage from "./components/user/ReactPage";
// import Home from "./components/user/Home";
// import Page404 from "./components/user/Page404";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//       {/* <Route path="/" element = {<Signin/>}/> */}

// <Route path='/' element={<Home/>}/>
//       <Route path='/coders/' element={<Coders/>}>
//         <Route path='node' element={<Node/>}/>
//         <Route path='reactpage' element={<ReactPage/>}/>
//         <Route path='placement' element={<Placement/>}/>
//       </Route>
// </Routes>
// </BrowserRouter>
// </>
// );
// };
// export default App;
