import React, { useState } from "react";
import axios from "axios";
const Url = "https://yantek.padipresence.id/api/authentication/login";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    imei: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...values,
    };
    axios
      .post(Url, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex item-center md:py-40 justify-center h-auto ...">
      <div className="w-full max-w-md  ">
        <form
          className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="text-gray-800 text-4xl flex justify-center py-2 mb-4">
            LOGO
          </div>
          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-normal mb-2"
              for="email"
            >
              username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              value={values.username}
              onChange={handleChange}
              type="text"
              require
              autoFocus
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-normal mb-2"
              for="password"
            >
              password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              require
              autoFocus
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label
              className="text-left block text-gray-700 text-sm font-normal mb-2"
              for="imei"
            >
              Imei
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="imei"
              value={values.imei}
              onChange={handleChange}
              type="text"
              require
              autoFocus
              placeholder="imei"
            />
          </div>

          <div className="mb-4">
            <button
              className="px-4 py-2 w-full rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
              type="submit"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
