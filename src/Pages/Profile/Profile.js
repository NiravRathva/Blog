import "./Profile.css"
import Sidebar from '../../Components/Sidebar/Sidebar'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileTitleUpdate">Update Your Account</span>
          <span className="profileTitleDelete">Delete Account</span>
        </div>
        <form className="profileForm">
          <label>Profile Picture</label>
          <div className="profileP">
            <img
              src="https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profilePIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="profilePInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Nirav" name="name" />
          <label>Email</label>
          <input type="email" placeholder="nirav0110@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="profileSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Profile