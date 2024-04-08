import Navbar from "../navbar/Navbar";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getCompanies } from "../../features/company/companySlice";

const CompanyList = () => {
  const dispatch = useDispatch("");
  const navigate = useNavigate("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  },[navigate]);

  const companies = useSelector((state) => state.company);
  const { cmplist_msg, company_data, error, loading } = companies;

  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.TOP_CENTER });
    }
    if (cmplist_msg) {
      toast.success(cmplist_msg, { position: toast.POSITION.TOP_CENTER });
    }
  }, [error, cmplist_msg]);

  useEffect(() => {
    dispatch(getCompanies());
  },[]);

  return (
    <>
      <ToastContainer autoClose={1000} theme="colored" closeOnClick />
      <div>
        <Navbar />
      </div>
      
      <div>
        <Link className="btn btn-warning float-right" to="/createcompany">
          +AddButton
        </Link>
        <br /> <br /> <br />

        {loading && <div>A moment please....</div>}
        {error && (
          <div> {`Their is a problem fetchng the post data - ${error}`} </div>
        )}

        <ul className="grid-company">
          {company_data && company_data.map(
              ({_id,company_logo,companyName,location,city,founded,}) => (

                <Link to={`/companydetails/${_id}`}>
                  <div>
                    <div className="company-show">
                      <div>
                        <img className="company-img" src={`http://localhost:9000${company_logo}`}/>
                      </div>
                      
                      <div>
                        <h5> {companyName} </h5> 
                        <h6> {location} </h6>
                        <h6> {founded} {city} </h6>     
                      </div>
                      <div>
                        <img src='../../assets/Review&Rate (1).png'/>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
        </ul>
      </div>
    </>
  );
};

export default CompanyList;
