import React from "react";
import styles from "./UserList.module.css"

const DUMMY_DATA = [
    {name:'Fredrick Quansah', id:'01'},
    {name:'Frank Quansah', id:'02'},
    {name:'Hannah Assumang', id:'03'},
    {name:'Kojo Quansah', id:'04'},
    {name:'Esther Asare', id:'05'},
    {name:'Hakeem Jahini', id:'06'},
    {name:'Eunice Bamfo', id:'07'},
]

const UserList = (props)=>{
    const filteredList = DUMMY_DATA.filter((data)=>{
        return data.name.includes(props.fileteredName)
    })
    const filteredMapList=filteredList.map((data)=>{
        console.log('filtering');
        return (
            <li key={data.name}>{data.name}</li>
        )
    })
    return (
        <div className={styles.userList__container}>
            <ul className={styles.userList}>
              {filteredList.length > 0 && filteredMapList}
            </ul>
        </div>
    )
}

export default React.memo(UserList);
