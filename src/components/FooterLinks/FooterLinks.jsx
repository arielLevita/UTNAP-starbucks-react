/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const FooterLinks = ({title, to}) => {
    return (
        <div>
            <li><Link to={to} className="text-gray-400 no-underline my-1">{title}</Link></li>
        </div>
    )
}

export default FooterLinks