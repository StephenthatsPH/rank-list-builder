import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import UserInfo from "./UserInfo";
import EditUserInfo from ".//EditUserInfo";
import UserPassword from "./UserPassword";
import EditUserPassword from "./EditUserPassword";

function UserAccount(){
    const { user, setUser } = useContext(UserContext)
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
            {isChangeInfo ? <EditUserInfo user={user} setUser={setUser}/> : <UserInfo user={user}/>}
            <button onClick={handleToggleInfoForm}>
                {isChangeInfo ? 'Go back' : 'Update Info'}
            </button>
            <br/>
            {isChangePassword ? <EditUserPassword user={user}/> : <UserPassword />}
            <button onClick={handleTogglePasswordForm}>
                {isChangePassword ? 'Go back' : 'Change Password'}
            </button>
        </div>
    )
}

export default UserAccount;