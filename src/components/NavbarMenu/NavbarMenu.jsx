import { Link } from "react-router-dom"

const NavbarMenu = () => {
    const navLinks = [
        {
            title: "menú",
            to: "/menu"
        },
        {
            title: "café",
            to: "/cafe"
        },
        {
            title: "experiencia starbucks",
            to: "/experienciapage"
        },
    ]

    return (
        <div className="p-2 md:p-0 font-semibold">
            <div className="block text-start md:flex md:justify-between">
                <ul className="block bg-white border-b border-gray-300 md:border-none md:inline-flex mb-0">
                    {
                        navLinks.map((link) => (
                            <li key={link.title} className="relative my-6 md:my-0 mx-6 hover:before:content-[''] hover:before:w-full hover:before:-bottom-6 hover:before:bg-sbdarkgreen hover:before:h-1 hover:before:absolute">
                                <Link className="uppercase" to={link.to}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-12 md:mt-0 mx-6">
                    <a href="#">
                        <i className="bi bi-geo-alt-fill"></i>
                        Localizar Tienda
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu