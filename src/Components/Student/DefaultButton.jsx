import React from "react";

function DefaultButton ({value, clicked, classname}) {

    return (
        <>
        <button className={`outline-2 outline-gray-600 p-2 rounded-md w-24 font-semibold bg-blue-600 text-white shadow-customShadow hover:border-2 hover:bg-white hover:text-black ${classname}`}>{value}</button>
        </>
    )
}

export default DefaultButton