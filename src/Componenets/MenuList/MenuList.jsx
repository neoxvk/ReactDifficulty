import style from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constants";
export const MenuList = (props) => {
  return (
    <div className={style.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItem
          key={difficulty}
          isSelected={props.difficulty === difficulty}
          onClick={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
}
