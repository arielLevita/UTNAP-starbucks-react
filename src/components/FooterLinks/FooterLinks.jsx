/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

/* Este componente recibe en forma de props la infomación necesaria para generar links de forma dinámica y luego los exporta. */
const FooterLinks = ({title, to}) => {
    return (
        <div>
            <li><Link to={to} className="text-gray-400 no-underline my-1">{title}</Link></li>
        </div>
    )
}

export default FooterLinks