import React from 'react'
import "./divider.css"
import { HiStar } from "react-icons/hi"
const Divider = ({ clsName }) => {

    return (<>
        <div className={` divider-custom ${clsName}`} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="divider-custom-line"></div>
            <div className='divider-custom-icon'>
                <HiStar />
            </div>
            <div className="divider-custom-line"></div>


        </div>

    </>);
}

export default Divider;