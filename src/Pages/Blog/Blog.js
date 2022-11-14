import Blogs from "../../Components/blog/blog"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./Blog.css"

const Blog = () => {
  return (
    <div className="container">
    <Blogs />
    <Sidebar />
  </div>
  )
}

export default Blog