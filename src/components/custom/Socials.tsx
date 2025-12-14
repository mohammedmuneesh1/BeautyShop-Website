import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


interface SocialsInterface{
    containerStyle?:string;
}



const Socials:React.FC<SocialsInterface> = ({containerStyle})=>{
    return(
        <ul className={`${containerStyle}`}>
            <li>
                <Link href={"/"} >
                    <FaInstagram/>
                </Link>
            </li>

            <li>
                <Link href={"/"} >
                    <FaFacebook/>
                </Link>
            </li>

            <li>
                <Link href={"/"} >
                    <FaTwitter/>
                </Link>
            </li>

            <li>
                <Link href={"/"} >
                    <FaYoutube/>
                </Link>
            </li>
        </ul>
    )
}
export default Socials

