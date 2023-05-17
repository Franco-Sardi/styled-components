import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../UI";

export default ({theme}) => {
    const claro = <Icono src={themeOn} alt="theme Claro"/>
    const oscuro = <Icono src={themeOff} alt="theme Claro"/>
    return <>{theme ? oscuro : claro}</>;
    
}