import { useState } from "react";

export default function Form() {
  let [formValue, setFormValue] = useState({
    fullName: "",
    userName: "",
    password:""
  });


//   let formInput = (event) => {
//     setFormValue({...formValue,[event.target.name]:event.target.value})}; /////////depends on previous value, so use callback

  let formInput = (event) => {
    setFormValue((currValue)=>{
        return {...formValue, [event.target.name] : event.target.value}});
  };
  let formSubmit = (event) => {
    event.preventDefault();
    setFormValue({
        fullName:"",
        userName:"",
        password:""
    })
    console.log(formValue);
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="fullname">Full Name: </label>
      <input
        value={formValue.fullName}
        id="fullname"
        placeholder="Enter Full Name"
        name="fullName"
        onChange={formInput}
      />
      <br />
      <label htmlFor="username">Username: </label>
      <input
        value={formValue.userName}
        id="username"
        placeholder="Enter Username"
        name="userName"
        onChange={formInput}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        value={formValue.password}
        id="password" type="password"
        placeholder="Enter Password"
        name="password"
        onChange={formInput}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
