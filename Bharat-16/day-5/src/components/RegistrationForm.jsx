import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Minimum 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Must be at least 18"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  gender: yup.string().required("Gender is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Form submitted successfully");
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>

      <input placeholder="Full Name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>

      <input placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>

      <select {...register("gender")} defaultValue="">
        
        
        
        <option value="Select Gender">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <p>{errors.gender?.message}</p>

      <label>
        <input type="checkbox" {...register("terms")} />
        Accept Terms
      </label>
      <p>{errors.terms?.message}</p>

      <button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default RegistrationForm;
