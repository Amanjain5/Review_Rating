import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCompanyDetails } from '../../features/company/companySlice';
import Navbar from "../navbar/Navbar"

const CompanyDetails = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const companyDetail = useSelector((state) => state.company);
  console.log(companyDetail, "i am here");
  const { compDetail, message } = companyDetail;
  console.log("detail", compDetail);
  const { companyDetails, comments } = compDetail;
  const { companyName, company_logo, city, founded, location } = {
    ...companyDetails,
  };

  useEffect(() => {
    dispatch(getCompanyDetails(id,));
  },[]);

  return (
    <div>
    <Navbar/>
    <section className="companyD-container">
        <div className="company-details">
          <div className="companyD-logo">
            <img id="cmpimg" src={`http://localhost:9000${company_logo}`}></img>
          </div>

          <div className="companyD-details">
            <p id="companyD-cmpfounded">
              <h6>Founded {founded}</h6>
            </p>
            <p id="companyD-cmpname">
              <h4>{companyName}</h4>
            </p>
            <p id="companyD-cmplocation">
              <h6>{location}</h6>
            </p>
            <p id="companyD-cmpcity">
              <h6>{city}</h6>
            </p>
            <p>
              {/* <input type="radio"></input> */}
            </p>
          </div>

          <div className="companyD-add-review">
            <button id="companyD-add-review" type="submit">
            <Link id="addReview" to={`/addcompanyreview/${id}`} >+ Add Review</Link>
            </button>
            </div>

        </div>
        <hr id="horizental-line"></hr>
        <div>
          {comments &&
            comments.map(({ review, rating, updatedAt, user_id }) => {
              return (
                <div className="companyD-user-review">
                  <div id="companyD-user-img-name">
                    <div id="companyD-user-img">
                      <img
                        id="companyD-userimg"
                        src={`http://localhost:9000${user_id.profilepic}`}
                      />
                    </div>
                    <div id="companyD-user-name">
                      <h4>{user_id.name}</h4>
                      <p>{updatedAt}</p>
                    </div>
                    <h6 id="companyD-rating">Rating : {rating}</h6>
                  </div>
                  <div id="companyD-user-msg">
                    <p id="companyD-review-text">{review}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  )
}

export default CompanyDetails
