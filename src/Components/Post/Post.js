import "./Post.css"

const Post = () => {
  return (
    <div className="post">
    <img
      className="postImg"
      src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">        
            Music       
        </span>
        <span className="postCat">          
            Life       
        </span>
      </div>
      <span className="postTitle">
          lorem5 lorem lorem     
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>
  )
}

export default Post