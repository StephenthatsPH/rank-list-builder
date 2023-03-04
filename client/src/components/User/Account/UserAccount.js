import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import UserInfo from "./UserInfo";
import EditUserInfo from ".//EditUserInfo";
import UserPassword from "./UserPassword";
import EditUserPassword from "./EditUserPassword";

function UserAccount(){
    const { users, setUsers } = useContext(UserContext)
    const [isChangeInfo, setIsChangeInfo] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);

    const handleToggleInfoForm = () => {
        setIsChangeInfo(!isChangeInfo);
    };
    
    const handleTogglePasswordForm = () => {
        setIsChangePassword(!isChangePassword);
    };



    return(
        <div>
            <hr/>
            {isChangeInfo ? <EditUserInfo user={users} setUser={setUsers}/> : <UserInfo user={users}/>}
            <button onClick={handleToggleInfoForm}>
                {isChangeInfo ? 'Go back' : 'Update Info'}
            </button>
            <br/>
            {isChangePassword ? <EditUserPassword user={users}/> : <UserPassword />}
            <button onClick={handleTogglePasswordForm}>
                {isChangePassword ? 'Go back' : 'Change Password'}
            </button>
        </div>
    )
}

export default UserAccount;