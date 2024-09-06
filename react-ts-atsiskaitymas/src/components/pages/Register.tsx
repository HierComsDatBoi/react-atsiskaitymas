import { useContext, useState } from "react";
import * as z from "zod";

import UserContext, { UserContextTypes } from "../../contexts/UserContext";

const Register = () => {

  const { users } = useContext(UserContext) as UserContextTypes;

  const schema = z.object({
    name: z
      .string()
      .min(1, "Name must be at least 1 character")
      .max(20, "Name must not exceed 20 characters"),
    birthDate: z.string().refine((date) => {
      const dateNow = new Date();
      const dateInput = new Date(date);
      return dateInput <= dateNow;
    }, "Please enter a valid birth date (in the past)."),
    userEmail: z.string().email("Invalid email. Please enter a valid email address."),
    password: z
      .string()
      .min(3, "Password must be at least 3 characters")
      .max(16, "Password must not exceed 16 characters"),
    passwordRepeat: z.string(),
  }).refine((data) => data.password === data.passwordRepeat, {
    path: ["passwordRepeat"],
    message: "Passwords do not match",
  });

  const [inputValues, setInputValues] = useState({
    name: '',
    birthDate: '',
    userEmail: '',
    userImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    password: '',
    passwordRepeat: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const HandleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = schema.safeParse(inputValues);

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Record<string, string>);
      return;
    }

    const findUserEmail = users.some(user => user.userEmail === inputValues.userEmail);
    if (findUserEmail) {
      return setErrors({userEmail: "This email is already egzists"})
    } else {
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(inputValues),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Success', data);
          setInputValues({
            name: '',
            birthDate: '',
            userEmail: '',
            userImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            password: '',
            passwordRepeat: ''
          });
          setErrors({});
        })
        .catch((error) => {
          console.log("Fail", error);
        });
    }
  };

  return (
    <section>
      <h2>Register</h2>

      <form onSubmit={HandleSubmitEvent}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputValues.name}
            onChange={HandleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="birthDate">Birthday: </label>
          <input
            type="text"
            name="birthDate"
            id="birthDate"
            placeholder="YYYY-MM-DD"
            value={inputValues.birthDate}
            onChange={HandleInputChange}
          />
          {errors.birthDate && <p>{errors.birthDate}</p>}
        </div>

        <div>
          <label htmlFor="userEmail">Email: </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={inputValues.userEmail}
            onChange={HandleInputChange}
          />
          {errors.userEmail && <p>{errors.userEmail}</p>}
        </div>

        <div>
          <label htmlFor="userImg">Profile photo URL: </label>
          <input
            type="url"
            name="userImg"
            id="userImg"
            value={inputValues.userImg}
            onChange={HandleInputChange}
          />
          {errors.userImg && <p>{errors.userImg}</p>}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={inputValues.password}
            onChange={HandleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="passwordRepeat">Password Repeat: </label>
          <input
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            value={inputValues.passwordRepeat}
            onChange={HandleInputChange}
          />
          {errors.passwordRepeat && <p>{errors.passwordRepeat}</p>}
        </div>

        <input type="submit" value="Register" />
      </form>
    </section>
  );
};

export default Register;
