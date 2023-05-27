// Componenet is nothing but a Function
// Function name should start with a capital letter
//*Checked is set to the value as true always
import { useState } from "react";
import { DisplayDifficulty } from "./Componenets/DisplayDifficulty/DisplayDifficulty"
import { MenuList } from "./Componenets/MenuList/MenuList"
import style from "./style.module.css"
export function App(){
  //Now we need to record the current Difficultty inorder to displayt it
  const [currentDifficulty, setCurrentDifficulty] = useState("No Difficulty Set")
  const onMenuListItemClick = (difficulty) => {
    //When we click on the MenuList Item the difficultty need to be updated
    setCurrentDifficulty(difficulty);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your React difficulty</h1>
      <div className={style.workspace}>
        <MenuList onItemClick={onMenuListItemClick} difficulty={currentDifficulty}/>
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

// Props are read only. "immutable" You cannot change the value of a prop
