import "./Posts.css"
import { Link } from "react-router-dom"
import Post from "../../Components/Post/Post"
const Posts = () => {
  return (
    <div className="posts">
   <Link to="/blog/:id" className="link"><Post/></Link>
   <Link to="/blog/:id" className="link"><Post/></Link>
   <Link to="/blog/:id" className="link"><Post/></Link>
   <Link to="/blog/:id" className="link"><Post/></Link>
   
    
  </div>
  )
}

export default Posts