import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import * as authActions from "../../redux/auth/authActions";
import ResponsiveBreakpointsExample from "../../components/Table/Table";
import Nav from "../../components/Navbar/Navbar";
import { Button } from "react-bootstrap";
import CModal from "../../components/Model/Model";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: any) => state.auth);
  const [show , setShow] = useState(false);
  
  const logout = async () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div style={{ width: "100%", background: "#e8e9f3" }}>
        <div className="main">
          <div className="ok" style={{ width: "15%" }}>
            {/* <SideBar/> */}
            <div style={{ background: "#1e1e2d", height: "100vh" }}>
              <p style={{ color: "#ffff" }}>Hammad Ahmad</p>
            </div>
          </div>
          <div style={{ width: "85%" }}>
            <div style={{ background: "#ffff" }}>
              <Nav />
            </div>
            <div className="content-div">
              <p className="add-customer shadow-sm">
                <span className="c-list">Customer List</span>{" "}
                <span>
                  {/* <Button className="add-customer-btn" onClick={()=>setShow(true)}> */}
                    <CModal />
                  {/* </Button> */}
                </span>
              </p>
              <ResponsiveBreakpointsExample />
            </div>
          </div>
        </div>
        {/* <button onClick={() => logout()}>logout</button> */}
      </div>
    </>
  );
};

export default Dashboard;
