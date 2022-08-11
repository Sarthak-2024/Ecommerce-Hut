import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name} The Great`} />
          <div className="profileContainer">
            <div>
              <h1>This is You My Lord!</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Wanna Edit Something?</Link>
            </div>
            <div>
              <div>
                <h4>Your Name Shire!</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Your Email Address</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>You blessed us on this platform on:</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">Your Orders Here</Link>
                <Link to="/password/update">Change Your Password?</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
