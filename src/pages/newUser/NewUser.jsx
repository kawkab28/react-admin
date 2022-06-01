import "./newUser.css";
import React, {Component} from 'react'
import axios from 'axios'

// export default function NewUser() 
class NewUser extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      Username:'',
      FullName:'',
      Email:'',
      Password:'',
      Phone:'',
      Address:''
}
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://locolhost:3000/users',this.state)
    .then(res => console.log(res))
  }

  render(){
    const {Username, FullName, Email, Password, Phone, Address} = this.state
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={this.submitHandler}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="Username" value= {Username} onChange={this.changeHandler} placeholder="Sam" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" name="FullName" value= {FullName} onChange={this.changeHandler} placeholder="Sam Khalil" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="Email" value= {Email} onChange={this.changeHandler} placeholder="sam@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="Password" value= {Password} onChange={this.changeHandler} placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" name="Phone" value= {Phone} onChange={this.changeHandler} placeholder="71383840" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" name="Address" value= {Address} onChange={this.changeHandler}  placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" onChange={this.changeHandler} />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" onChange={this.changeHandler} />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"  onChange={this.changeHandler} />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes" onChange={this.changeHandler}>Yes</option>
            <option value="no" onChange={this.changeHandler} >No</option>
          </select>
        </div>
        <button type="submit" className="newUserButton" >Create</button>
      </form>
    </div>
  );
}
}

export default NewUser
