import React from "react";

function DefaultButton ({value, clicked, classname}) {

    return (
        <>
        <button className={`outline-2 outline-gray-600 p-2 rounded-sm  w-32 mr-10 mt-2 font-semibold  active:scale-[.96] duration-200 ease-in-out  shadow-customShadow ${classname}`} onClick={clicked} type="submit">{value}</button>
        </>
    )
}

export default DefaultButton