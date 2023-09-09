import "./ContentHeader.css";
import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ReactComponent as Arrow} from "./img/leftArrow.svg";

const ContentHeader = ({title, children}) => {
    // const navigate = useNavigate();
    return (
    <div>
        {/* <a href="#" className="buttonBack" onClick={() => navigate(-1)}> <Arrow/>Назад</a> */}
        <h1 className="title">{title}</h1>
        {children}
     </div>
    )
}

export default ContentHeader;