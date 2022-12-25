import React from "react";
import styles from "./UserSearchInput.module.css";
import Card from "../UI/Card/Card";
import InputBox from "../UI/InputBox/InputBox";

const UserSearchInput=(props)=>{
    return (
        <Card className={styles.usersearchinput__container}>
            <InputBox onChangeHandler={props.onChangeSearchTerm}/>
        </Card>
    )
}

export default UserSearchInput