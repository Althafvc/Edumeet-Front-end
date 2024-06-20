import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from "react-icons/cg";
import profile from '../../assets/images/otpbg.jpg'; // Ensure the path to the image is correct
import StudentButton from "./StudentButton";

function Navbar() {
    let img = profile
    return (
        <nav className="flex justify-between px-8 items-center py-4 border-2 border-red-200">
            <section className="flex items-center gap-3">
                <AiOutlineMenu className="text-2xl" />
                <p className="text-xl font-mono">Edumeet</p>
            </section>
            
            <section className="flex gap-10">
                {img ? (
                    <img src={profile} className="w-[60px] h-[60px] rounded-full" alt="Profile" />
                ) : (
                    <CgProfile className="text-3xl" />
                )}
                <StudentButton value={'Logout'}/>
            </section>
        </nav>
    );
}

export default Navbar;
