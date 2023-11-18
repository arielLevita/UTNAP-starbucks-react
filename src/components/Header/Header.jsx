import { Link } from "react-router-dom";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { useState } from "react";

const Header = () => {

    let [show, setShow] = useState(false);

    const handleShowMenu = () => {
        setShow(!show)
    }

    console.log(show)

    return (
        <header className={` ${show ? 'sticky w-full top-0' : ''}`}>
            <nav className="shadow shadow-slate-200 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center px-5">
                        <Link className="" to={'/'}>
                            <img src="https://i.postimg.cc/XJktkb5X/starbucks-logo-3.png"
                                alt="starbucks logo" className="h-12" />
                        </Link>

                        <div className="w-full hidden md:block">
                            <NavbarMenu />
                        </div>

                        <button className='inline-flex md:hidden ml-auto' onClick={handleShowMenu}>
                            {show
                                ?
                                <div>
                                    <i className="bi bi-x-lg w-8 h-8 text-2xl"></i>
                                    <div className="fixed bg-black bg-opacity-60 top-20 right-0 w-screen h-screen overflow-hidden">
                                        <div className="bg-white w-[85vw] h-screen ml-[auto]">
                                            <NavbarMenu />
                                        </div>
                                    </div>
                                </div>
                                :
                                <i className="bi bi-list w-8 h-8 text-2xl"></i>
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header