import React, { useState } from "react";

const Body = () => {
  const [state, setState] = useState([]);
  function handle(formData) {
    const forms = formData.get("email");
    const froms = formData.get("password");
    const fromss = formData.get("description");
    const fromsss = formData.get("employymentStatus");
    setState((prev) => {
      return [
        ...prev,
        {
          email: forms,
          password: froms,
          description: fromss,
          employmentStatus: fromsss,
        },
      ];
    });
  }
  const list = state.map((bluh, index) => {
    return (
      <li key={index}>
        {bluh.email}- {bluh.password}{" "}
      </li>
    );
  });
  return (
    <div>
      <form action={handle}>
        <label htmlFor="email">
          {" "}
          email
          <input
            name="email"
            id="email"
            type="email"
            defaultValue="ragnar@gmail.com"
          />
        </label>
        <label htmlFor="password">
          password
          <input
            name="password"
            id="password"
            type="password"
            defaultValue="ragnar"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            defaultValue="This is a description"
          ></textarea>
        </label>
        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input
              name="employymentStatus"
              value="unemployed"
              type="radio"
              defaultChecked={true}
            />
            Unemployed
          </label>
          <label>
            <input name="employymentStatus" value="employed" type="radio" />
            employed
          </label>
          <label>
            <input name="employymentStatus" value="Student" type="radio" />
            Student
          </label>
        </fieldset>
        <button type="submit">submit</button>
      </form>

      {list}
    </div>
  );
};

export default Body;
