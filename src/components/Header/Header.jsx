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
        <header className={`bg-white border-b border-gray-300 py-4 ${show ? 'sticky w-full top-0' : ''}`}>
            <nav>
                <div>
                    <div className="flex items-center px-4 md:px-12 lg:px-16">
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
                                    <div className="fixed border border-red-600 bg-black bg-opacity-60 top-20 right-0 w-screen h-screen overflow-hidden">
                                        <div className="bg-white w-[80vw] h-screen ml-[auto]">
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