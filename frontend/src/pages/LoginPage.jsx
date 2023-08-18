import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Section } from "../styles/loginPageStyles";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/userAuthApiSlice";
import { passwordValidation, emailValidation } from "../utils/validations";

const LoginPage = () => {
  const [error, setError] = useState("");
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const loginUser = async (data) => {
    const { email, password } = data;
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.log(err.data.message);
      setError(err?.data?.message);
      toast.error(err.data.message);
    }
  };

  const submitHandler = methods.handleSubmit((data) => {
    loginUser(data);
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <FormProvider {...methods}>
      <Section>
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
          {/* <p style={{ color: "red" }}>{error ? error : ""}</p> */}
          <Button
            disabled={isLoading}
            onClick={submitHandler}
            type="submit"
            className="pending"
          >
            Login
          </Button>
        </form>
        <h2 style={{ fontSize: "1rem" }}>
          Don't have an account <Link to="/create-account">Create now</Link>
        </h2>
      </Section>
      {/* <>{isLoading && <FullScreenLoader />}</> */}
    </FormProvider>
  );
};

export default LoginPage;
