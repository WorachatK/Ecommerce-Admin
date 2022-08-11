import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod"

export default function WidgetSm() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async ()=>{
    try{
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      }catch{}
    }
    getUsers()
  })
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(     
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://www.finearts.cmu.ac.th/wp-content/uploads/2021/07/blank-profile-picture-973460_1280-1.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}