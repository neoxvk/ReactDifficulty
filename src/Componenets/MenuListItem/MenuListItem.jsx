import { useState } from "react";
import style from "./style.module.css";
export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const activate = () => {
    setIsHovered(true);
  };
  const deactivate = () => {
    setIsHovered(false);
  };
  //console.log("Is hovered ? ", isHovered);
  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };
  return (
    <div
      onClick={onItemClick}
      className={style.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};
