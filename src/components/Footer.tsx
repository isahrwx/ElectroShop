import { Link } from "react-router-dom";
import logo from "../images/ElectroShopLogo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer-container  mt-10 " style={{ background: '#0B132B' }}>
                <div className="top-footer flex py-6 items-center  ">
                    <div className="left-box w-1/2 p-6 flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-white ">Stay Connected With <span className="text-blue-500">ElectroShop</span></h2>
                        <p className="text-gray-300 text-sm">Get the latest tech news and exclusive offers.</p>
                    </div>
                    <div className="right-box w-1/2 px-6 py-3 ">
                        <div className="email-box border border-blue-700 px-6 py-2 bg-blue-950 rounded-lg flex justify-between ">

                            <input type="text" placeholder="Enter Your Email Addrress" className="text-gray-300" /> <button className="bg-blue-500 rounded-lg text-white font-bold px-6 py-2">Send Email</button>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer flex border-t p-8 border-t-gray-500">
                    <div className="left-box w-1/3  flex flex-col gap-5">
                        <img src={logo} className="w-50" alt="" />
                        <p className="text-white text-justify ">Hi, I'm Sahra! ElectroShop is my personal practice project, built as part of my web development journey. I'd really appreciate your support! Follow me on social media.  </p>

                    </div>
                    <div className="center-box w-1/3 flex items-center gap-4 flex-col ">
                        <h2 className="text-xl text-white font-bold">Quick Links</h2>
                        <Link className="text-blue-50 hover:text-blue-400 text-lg border-b border-b-blue-500 my-2" to="/">Home</Link>
                        <Link className="text-blue-50 hover:text-blue-400 text-lg border-b border-b-blue-500 my-2" to="/categorys">Categories</Link>
                    </div>
                    <div className="right-box w-1/3 flex items-center  gap-6 flex-col ">
                        <h2 className="text-xl text-white font-bold">Social Links</h2>
                        <div className="box flex gap-3">
                            <a className="bg-blue-950 px-6 py-2 rounded-lg border border-blue-700 text-white hover:bg-blue-500 my-3" href="https://instagram.com/logicallearn_team">Instagram</a>
                            <a className="bg-blue-950 px-6 py-2 rounded-lg border border-blue-700 text-white hover:bg-blue-500 my-3" href="https://www.youtube.com/@logicallearn_team">Youtube</a>
                            <a className="bg-blue-950 px-6 py-2 rounded-lg border border-blue-700 text-white hover:bg-blue-500 my-3" href="https://github.com/isahrwx">Github</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

