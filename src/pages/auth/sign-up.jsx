import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { UserAuth } from "@/context/AuthContext";


export function SignUp() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    // username: '',
    // name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { createUser } = UserAuth();

  

  const validatePassword = (password) => {
    if(password.length < 7){
      toast.error("Password must be at least 7 characters long");
      return false;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{7,}$/;
    if(!regex.test(password)){
      toast.error("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInputs(prev => ({...prev,[name]:value}));
  }

  const handleSignup = async (e) => {
    e.preventDefault();

    if(inputs.email === '' || inputs.password === '' || inputs.confirmPassword === ''){
      toast.error("Please fill all the fields");
      return;
    }

    if(inputs.password !== inputs.confirmPassword){
      toast.error("Passwords do not match");
      return;
    }
    if(!validatePassword(inputs.password)){
      return;
    }
    try {
      await createUser(inputs.email, inputs.password);
      toast.success('Account created successfully')
      navigate('/account')
    } catch (e) {
      toast.error(e.message)
      console.log(e.message);
    }
  }

  return (
    <section className="p-8 flex text-surface-light">
            <div className="w-2/5  h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-1">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal text-surface-light-dark">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-2 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSignup}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium text-surface-light">
              Your email
            </Typography>
            <Input
              size="lg"
              type="email"
              placeholder="name@mail.com"
              name="email"
              className="!border-surface-mid-dark text-surface-light focus:!border-secondary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium text-surface-light">
              Your username
            </Typography>
            <Input
              size="lg"
              placeholder="Username"
              name="username"
              className="!border-surface-mid-dark text-surface-light focus:!border-secondary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium text-surface-light">
              Your name
            </Typography>
            <Input
              size="lg"
              placeholder="Name"
              name="name"
              className="!border-surface-mid-dark text-surface-light focus:!border-secondary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div> */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium text-surface-light">
              Your password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Password"
              name="password"
              className="!border-surface-mid-dark text-surface-light focus:!border-secondary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium text-surface-light">
              Confirm password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Confirm password"
              name="confirmPassword"
              className="!border-surface-mid-dark text-surface-light focus:!border-secondary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div>
          <Button className="mt-6 bg-secondary hover:bg-primary" fullWidth type="submit">
            Register Now
          </Button>
          <Typography variant="paragraph" className="text-center text-surface-light-dark font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-secondary ml-1 hover:text-primary">Sign in</Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
