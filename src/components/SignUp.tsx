import { useState } from "react";
import "../styles/RegisterForm.css";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [error, setError] = useState({
        username: "", age: "", email: "", currentPassword: "", confirmPassword: ""
    })
    const submitHandler = (event) => {
        

        

   event.preventDefault();
        const errors = {
            username: "", age: "", email: "", currentPassword: "", confirmPassword: ""
        }
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const age = formData.get("age");
        const email = formData.get("email");
        const currentPassword = formData.get("currentPassword");
        const confirmPassword = formData.get("confirmPassword");
        const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (typeof username !== "string" || username.trim() === "") {
            errors.username = "username is required!";
        }
        if (typeof age !== "string" || age.trim() === "") {
            errors.age = "age is required!"
        }
        else if (Number(age) < 18) {
            errors.age = "age must be 18 years or older!"
        }
        if (typeof email !== "string" || email.trim() === "") {
            errors.email = "email is reuired!";
        }
        else if (!emailPattern.test(email)) {
            errors.email = "email is invalid!"
        }
        if (typeof currentPassword !== "string" || currentPassword.trim() === "") {
            errors.currentPassword = "password is required!";
        }
        else if (currentPassword.length < 8) {
            errors.currentPassword = "the password must be 8 character or more!"
        }
        else if (!/[a-z]/.test(currentPassword) || !/[A-Z]/.test(currentPassword) || !/[!@#$%&*_]/.test(currentPassword) || !/[0-9]/.test(currentPassword)) {
            errors.currentPassword = "the password must contain a special character, a number between 0-9, uppercase and lowercase character!";
        }
        if (typeof confirmPassword !== "string" || confirmPassword.trim() === "") {
            errors.confirmPassword = "please confirm your password!";
        }
        else if (confirmPassword !== currentPassword) {
            errors.confirmPassword = "passwords not equal!";

        }
        setError(errors);
        const hasErrors = Object.values(errors).some(item => item !== "");
        if (hasErrors) {
            return;
        }
        console.log("form sended successfully");





}




  return (
    <div className="flex p-10 register-form-container h-200 shadow items-stretch">
       <div className="img-box w-6/14 h-full flex items-stretch rounded-l-lg ">
       </div>



       <div className="form-box w-7/14 p-6 rounded-r-lg shadow  ">

        <h1 className="text-white text-3xl text-center">Create Your Account</h1>



       <form action="" className="flex flex-col gap-3" onSubmit={submitHandler}>
        <div className="username">
            <label htmlFor="username" className="text-white ">User Name: </label>
            <input type="text"className="text-white border border-blue-600 w-full py-1 px-2 rounded-sm my-1 " name="username" id="username" />
            <p className="text-red-500 text-lg text-shadow-amber-700">{error.username&&error.username}</p>
        </div>
        <div className="age">
            <label className="text-white"  htmlFor="age">Age: </label>
            <input type="number" name="age"  id="age" className=" text-white border border-blue-600 w-full rounded-sm my-1 full py-1 px-2" />
            <p className="text-red-500 text-lg text-shadow-amber-700">{error.age&&error.age}</p>

        </div>
         <div className="email">
            <label className="text-white" htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" className="border border-blue-600 text-white   my-1 w-full py-1 rounded-sm px-2" />
            <p className="text-red-500 text-lg text-shadow-amber-700">{error.email&&error.email}</p>

        </div>
         <div className="currentPassword">
            <label className="text-white"  htmlFor="currentPassword">Password: </label>
            <input type="password" name="currentPassword" id="currentPassword" className=" rounded-sm text-white  my-1 border border-blue-600 w-full py-1 px-2"/>
            <p className="text-red-500 text-lg text-shadow-amber-700">{error.currentPassword&&error.currentPassword}</p>

        </div>
         <div className="confirmPassword">
            <label htmlFor="confirmPassword" className="text-white">Confirm Password: </label>
            <input type="password" name="confirmPassword" id="confirmPassword" className=" my-1 border rounded-sm text-white  border-blue-600 w-full py-1 px-2"/>
            <p className="text-red-500 text-lg text-shadow-amber-700">{error.confirmPassword&&error.confirmPassword}</p>

        </div>
        <button type="submit" className="bg-blue-900 px-3 py-1 text-white w-full my-1">Register</button>
        <span className="text-white text-lg">have an account? <Link className="text-blue-500" to="/login">Login</Link></span>
       </form>
      
       </div>
    </div>
  )
}

export default SignUp

