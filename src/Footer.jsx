
import logo from "/images/logo2.svg"
import email from "/images/icon-email.svg"
import phone from "/images/icon-phone.svg"
import { FaFacebookF , FaTwitter, FaInstagram} from "react-icons/fa";

function Footer () {
    return(
        <>
            <div className="bg-Very_Dark_Blue text-white p-8 md:flex md:justify-center">
                <div className=" md:w-400px]">
                    <img src={logo} className="text-white p-2 md:h-12" alt="" />
                    <div className="flex p-2 md:p-0">
                        <img src={phone} className="p-2 md:h-8 md:py-2" alt="" /> 
                        <p className="p-2 text-[20px]"> Phone: +1-543-123-4567</p>
                    </div>
                    <div className="flex p-5 md:p-0">
                        <img src={email} className="h-9 py-2 md:h-8" alt="" /> 
                        <p className="px-3 text-[20px]">example@fylo.com</p>
                    </div>
                </div>
                <div className="px-5 py-2  md:p-0 md:mt-10 ml-8">
                    <ul>
                        <li className="text-[1.2em] p-1 md:p-0 cursor-pointer hover:text-Desaturated_Blue">About Us</li>
                        <li className="text-[1.2em] p-1 md:p-0 cursor-pointer hover:text-Desaturated_Blue">Jobs</li>
                        <li className="text-[1.2em] p-1 md:p-0 cursor-pointer hover:text-Desaturated_Blue">Press</li>
                        <li className="text-[1.2em] p-1 md:p-0 cursor-pointer hover:text-Desaturated_Blue">Blog</li>
                    </ul>
                </div>
                <div className="px-5 py-2  md:py-0 md:px-0 md:p-0 md:mt-10 ml-8">
                    <ul>
                        <li className="text-[1.2em] p-1 cursor-pointer hover:text-Desaturated_Blue">Contact Us</li>
                        <li className="text-[1.2em] p-1 cursor-pointer hover:text-Desaturated_Blue">Terms</li>
                        <li className="text-[1.2em] p-1 cursor-pointer hover:text-Desaturated_Blue">Privacy</li>
                    </ul>
                </div>
                <div className="p-0 flex justify-center items-center md:p-0 md:ml-8 mt-10 cursor-pointer">
                    <FaFacebookF  className="m-5 text-2xl border-[1px] h-8 w-8 p-2 rounded-full md:m-2 hover:text-Desaturated_Blue"/>
                    <FaTwitter className="m-5 text-2xl border-[1px] h-8 w-8 p-2 rounded-full md:m-2 hover:text-Desaturated_Blue"/>
                    <FaInstagram className="m-5 text-2xl border-[1px] h-8 w-8 p-2 rounded-full md:m-2 hover:text-Desaturated_Blue"/>
                </div>
            </div>
        </>
    )
}

export default Footer