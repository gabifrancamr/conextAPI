import { useContext } from "react";

import "./styles.css"

import ThemeContext from "../../contexts/ThemeContext"

const Box = () => {
    const theme = useContext(ThemeContext);

return <div className={`box ${theme}`}></div>

}

export default Box