import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import CDropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import { BiBasket, BiPencil } from "react-icons/bi";
import CPagination from "../Pagination/Pagination";

function ResponsiveBreakpointsExample() {
  const [checked, setAllCheck] = useState(false);
  const [single, setSingle] = useState(false);
  const [singleCheck, setSingleCheck] = useState(false);

  const handleClick = () => {
    setSingle(!single);
    setAllCheck(!checked);
  };
  const handleSingleClick = () => {
    setSingleCheck(!singleCheck);
  };
  const handleEdit=()=>{
    alert('Edit')
  }
  const handleDelete=()=>{
    alert('Delete')
  }
  return (
    <div className="table-class">
      <div className="drop-down">
        <CDropdown
          boldHeading={"Filter"}
          heading={"All"}
          text="by Status"
          list={["Suspending", "Active" , "Pending"]}
        />
        <CDropdown
          boldHeading={"Filter"}
          heading={"All"}
          text="by Type"
          list={["Business", "Individual"]}
        />
        <Input
          boldHeading={"Search"}
          placeholder={"Search"}
          text={"in all fields"}
        />
      </div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>
              <Form.Check onClick={handleClick} checked={checked} />
            </th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Check
                onClick={handleSingleClick}
                checked={single ? singleCheck : checked}
              />
            </td>
            <td>1</td>
            <td>Hammad</td>
            <td>Ahmad</td>
            <td>mrhammad.009@gmail.com</td>
            <td>Male</td>
            <td>
              <span className="status">Suspended</span>
            </td>
            <td className="individual">
              <span className="status-circle"></span>Individual
            </td>
            <td>
              <div className="icon">
                <BiPencil
                  size={25}
                  color="#3699fe"
                  className="icon-style cle"
                  onClick={handleEdit}
                />
                <BiBasket
                  color="#f55365"
                  size={25}
                  className="icon-style cld"
                  onClick={handleDelete}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Check checked={single ? singleCheck : checked} />
            </td>
            <td>2</td>
            <td>Zubaida</td>
            <td>Riaz</td>
            <td>Zubaidawazir@gmail.com</td>
            <td>Female</td>
            <td>
              <span className="status-active">Active</span>
            </td>
            <td className="individual">
              <span className="status-circle"></span>Individual
            </td>
            <td>
            <div className="icon">
                <BiPencil
                  size={25}
                  color="#3699fe"
                  className="icon-style"
                  onClick={handleEdit}
                />
                <BiBasket
                  color="#f55365"
                  size={25}
                  className="icon-style"
                  onClick={handleDelete}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Check checked={single ? singleCheck : checked} />
            </td>
            <td>3</td>
            <td>Ammar</td>
            <td>Ahmad</td>
            <td>ammar@gmail.com</td>
            <td>Male</td>
            <td>
              <span className="status">Suspended</span>
            </td>
            <td className="individual">
              <span className="status-circle"></span>Individual
            </td>
            <td>
            <div className="icon">
                <BiPencil
                  size={25}
                  color="#3699fe"
                  className="icon-style cle"
                  onClick={handleEdit}
                />
                <BiBasket
                  color="#f55365"
                  size={25}
                  className="icon-style cld"
                  onClick={handleDelete}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="pg">
      <CPagination/>
      <div className="nb-pg">
      <div><CDropdown list={[1,2,3,4]} heading={'3'} text={''} boldHeading={''}/></div>
      <p className="showing">Showing rows 1 to 3 0f 100</p>
      </div>
      </div>
    </div>
  );
}

export default ResponsiveBreakpointsExample;
