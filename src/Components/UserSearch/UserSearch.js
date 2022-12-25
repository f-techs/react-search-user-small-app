import React, {useState} from "react";
import styles from "./UserSearch.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import UserList from "../UserList/UserList";
import UserSearchInput from "../UserSearchInput/UserSearchInput";


const UserSearch = (props) => {
  const [toggleState, setToggleState]=useState(false);
  const [searchName, setSearchName]=useState(null);
  const toggleUserList=()=>{
    setToggleState((prevState)=>!prevState)
  }
  const searchNameChange = (event)=>{
    const Str = (event.target.value).substr(0,1).toUpperCase() + (event.target.value).substr(1);
    setSearchName(Str)
    console.log(searchName)
  }
  return (
<React.Fragment>
  <UserSearchInput onChangeSearchTerm={searchNameChange}/>
    <Card className={styles.user__search__container}>
      <div>
         <Button className={styles.toggle__button} buttonAction={toggleUserList} title={toggleState ? 'Hide' : 'Show'}></Button>
      </div>
    {toggleState && <UserList fileteredName={searchName}/>}  
    </Card>
</React.Fragment>
  );
};

export default UserSearch
