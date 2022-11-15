import "./AddBlog.css"

const AddBlog = () => {
  return (
    <div className="addBlog">
    <img
      className="addBlogImg"
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <form className="addBlogForm">
      <div className="addBlogFormGroup">
        <label htmlFor="fileInput">
          <i className="addBlogIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
        <input
          className="addBlogInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
        />
      </div>
      <div className="addBlogFormGroup">
        <textarea
          className="addBlogInput addBlogText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
        />
      </div>
      <button className="addBlogSubmit" type="submit">
        Publish
      </button>
    </form>
  </div>
  )
}

export default AddBlog