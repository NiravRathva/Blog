import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="titles">
        <span className="Sm">React & Node</span>
        <span className="Lg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  )
}

export default Header