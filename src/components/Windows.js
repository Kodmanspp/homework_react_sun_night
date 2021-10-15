import style from "./Windows.module.scss";
import React, { useState } from "react";

function Windows() {
    const [timeOfDay, setTimeOfDay] = useState(true);
    function DayIterator() {
        setTimeOfDay(!timeOfDay);
    }
    return (
        <div className={`${style.windows} ${timeOfDay?style.windows_day : style.windows_night}`} onClick={DayIterator}>
            <div className={`${style.sun} ${timeOfDay ? style.sun_day : style.sun_night}`}></div>
        </div>
    )
}
export default Windows;