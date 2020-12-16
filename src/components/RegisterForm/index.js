import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//STYLES
import { Form, ButtonRegister, Display } from "./styles";
import { TextField } from "@material-ui/core";

//COMPONENTS
import ButtonSnackBar from "../SnackBar";

const RegisterForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("It requires email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters ")
      .required("Required"),
    password_confirmation: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Password must be at least 6 characters and the same as above"
      )
      .required("Password must be the same as above"),
    name: yup
      .string()
      .min(4, "Minimum of 4 characters required")
      .required("Required"),
    bio: yup.string().min(8, "Bio info is required").required("Required"),
    contact: yup.string().min(11, "Invalid phone number").required("Required"),
    course_module: yup
      .string()
      .min(2, "It's necessary to inform the current quarter")
      .required("Required"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://kenziehub.me/users", data)
      .then((res) => console.log(res));
  };

  const showMessage = () => {
    if (Object.keys(errors).length !== 0) {
      return (
        <ButtonSnackBar
          open={true}
          message="Please enter valid format or fulfill missing fields"
          severityValue="error"
        />
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <Display>
        <TextField
          label="Name"
          name="name"
          inputRef={register}
          variant="outlined"
          size="small"
        />
      </Display>
      <Display>
        <TextField
          label="Course module"
          name="course_module"
          inputRef={register}
          variant="outlined"
          size="small"
        />
      </Display>
      <Display>
        <TextField
          label="Bio"
          name="bio"
          inputRef={register}
          variant="outlined"
          size="small"
        />
      </Display>
      <Display>
        <TextField
          label="Contact"
          name="contact"
          inputRef={register}
          variant="outlined"
          size="small"
        />
      </Display>
      <Display>
        <TextField
          label="Email"
          name="email"
          inputRef={register}
          variant="outlined"
          size="small"
        />
      </Display>
      <Display>
        <TextField
          label="Password"
          name="password"
          inputRef={register}
          variant="outlined"
          size="small"
          type="password"
        />
      </Display>
      <Display>
        <TextField
          label="Password confirmation"
          name="password_confirmation"
          inputRef={register}
          variant="outlined"
          size="small"
          type="password"
        />
      </Display>
      <Display>
        <ButtonRegister type="submit">submit</ButtonRegister>
      </Display>
      {showMessage()}
    </Form>
  );
};

export default RegisterForm;
