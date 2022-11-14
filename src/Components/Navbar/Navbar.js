import "./Navbar.css"

const Navbar = () => {
    return (<>
        <div className="navbar">
            <div className="left">
            <i className="icon fa-brands fa-facebook-f"></i>
            <i className="icon fa-brands fa-twitter"></i>
            <i className="icon fa-brands fa-instagram"></i>
            </div>
            <div className="center">
                <ul className="navlist">
                    <li className="navlistitem">Home</li>
                    <li className="navlistitem">About</li>
                    <li className="navlistitem">Contact</li>
                </ul>
            </div>

            <div className="right">
                <img src="data:image/jpeg;base64,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" alt="" className="navimg" />
            <i className=" search fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </>
    )
}

export default Navbar