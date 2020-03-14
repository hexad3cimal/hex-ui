import React from "react";
import SideBarMenu from "./SideBarMenu";

const SideBar = (props) => {
    return (<div className="side-bar">
        {props && props.data && props.data.map(_menu => {
            return <SideBarMenu item={_menu}/>
        })}
    </div> );
};
export default SideBar;
