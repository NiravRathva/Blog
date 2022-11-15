import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    const user = false;
    return (<>
        <div className="navbar">
            <div className="left">
                <i className="icon fa-brands fa-facebook-f"></i>
                <i className="icon fa-brands fa-twitter"></i>
                <i className="icon fa-brands fa-instagram"></i>
            </div>
            <div className="center">
                <ul className="navlist">
                    <li className="navlistitem"><Link className="link" to="/">
                        HOME
                    </Link></li>
                    <li className="navlistitem">About</li>
                    <li className="navlistitem">Contact</li>
                    <li className="navlistitem"><Link className="link" to="/addblog">
                        Write
                    </Link></li>
                </ul>
            </div>

            <div className="right">
                {user ? (<Link to="profile"><img src="https://images.unsplash.com/photo-1603217041431-9a99375beab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="navimg" /></Link>) : (
                    <ul className="navlist">
                        <li className="navlistitem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="navlistitem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}

            </div>
        </div>
    </>
    )
}

export default Navbar