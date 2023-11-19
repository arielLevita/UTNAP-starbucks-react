import { Link } from "react-router-dom"

const NavbarMenu = () => {
    const navLinks = [
        {
            title: "menú",
            to: "/"
        },
        {
            title: "café",
            to: "/cafe"
        },
        {
            title: "experiencia starbucks",
            to: "/experienciapage"
        },
        {
            title: "admin",
            to: "/admin"
        },
    ]

    return (
        <div className="p-2 md:p-0 font-semibold">
            <div className="block text-start md:flex md:justify-between">
                <ul className="block bg-white border-b border-gray-300 md:border-none md:inline-flex mb-0">
                    {
                        navLinks.map((link) => (
                            <li key={link.title} className="my-6 md:my-0 mx-6">
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