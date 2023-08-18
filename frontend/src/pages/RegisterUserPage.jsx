import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Section } from "../styles/loginPageStyles";
import { emailValidation, passwordValidation } from "../utils/validations";
import Button from "../components/Button";
import { useRegisterMutation } from "../slices/userAuthApiSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FullScreenLoader from "../components/Loader";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";

const RegisterUserPage = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser, { isLoading }] = useRegisterMutation();

  const submitHandler = methods.handleSubmit(async (data) => {
    const { email, password, confirmPassword, name } = data;
    try {
      if (password !== confirmPassword) {
        toast.error("Password does not match Confirm Password");
        return;
      }
      const res = await registerUser({
        email,
        password,
        confirmPassword,
        name,
      });

      if (
        res?.error?.data?.message === "User Already exists" ||
        res?.error?.data?.message === "Invalid User Data"
      ) {
        toast.error(res?.error?.data?.message);
        return;
      }

      dispatch(setCredentials({ ...res }));
      toast.success("Account created successfully");
      navigate("/");
    } catch (err) {
      console.log(err.data.message);
      toast.error(err?.data?.message || err?.error);
    }
  });

  return (
    <FormProvider {...methods}>
      <Section>
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField
            control={methods.control}
            id={"name"}
            name={"name"}
            label={"Name"}
            type={"text"}
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <InputField
            control={methods.control}
            id={"email"}
            name={"email"}
            label={"Email"}
            type={"text"}
            validation={emailValidation}
          />
          <InputField
            control={methods.control}
            id={"password"}
            name={"password"}
            label={"Password"}
            type={"password"}
            validation={passwordValidation}
          />
          <InputField
            control={methods.control}
            id={"confirmPassword"}
            name={"confirmPassword"}
            label={"Confirm Password"}
            type={"password"}
            validation={passwordValidation}
          />
          <Button
            // disabled={isLoading}
            onClick={submitHandler}
            type="submit"
            className="pending"
          >
            Create Account
          </Button>
        </form>
        <h2 style={{ fontSize: "1rem" }}>
          Already have an account <Link to="/login">Login now</Link>
        </h2>
      </Section>
      <>{isLoading && <FullScreenLoader />}</>
    </FormProvider>
  );
};

export default RegisterUserPage;
