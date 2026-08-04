import React, { useState } from "react";

const Body = () => {
  const [state, setState] = useState([]);
  function handle(formData) {
    const forms = formData.get("email");
    const froms = formData.get("password");
    setState((prev) => {
      return [...prev, { email: forms, password: froms }];
    });
  }
  const list = state.map((bluh) => {
    return <li key={bluh}>{bluh}</li>;
  });
  return (
    <div>
      <form>
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
            type="description"
            defaultValue="This is a description"
          ></textarea>
        </label>
        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input name="employymentStatus" value="unemployed" type="radio" defaultChecked={true} />
            Unemployed
          </label>
          <label>
            <input name="employymentStatus" value="unemployed" type="radio" />
            employed
          </label>
          <label>
            <input name="employymentStatus" value="unemployed" type="radio" />
            Student
          </label>
        </fieldset>
      </form>

      {list}
    </div>
  );
};

export default Body;
