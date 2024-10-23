"use client";
import useAppState from "../../hooks/useAppState";
import { useState } from "react";

export default function About() {
  const [newPersonForm, setNewPersonForm] = useState({ name: "", title: "" });

  const appState = useAppState();

  function changeFormField(e) {
    setNewPersonForm({
      ...newPersonForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function submitNewPerson(e) {
    e.preventDefault();
    appState.addPerson(newPersonForm);
    setNewPersonForm({ name: "", title: "" });
  }

  console.log(appState.people);

  return (
    <>
      <main>
        <h1>About</h1>

        <form onSubmit={submitNewPerson}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={newPersonForm.name}
              onChange={changeFormField}
            />
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={newPersonForm.title}
              onChange={changeFormField}
            />
          </div>

          <div>
            <input type="submit" value="Add Person" />
          </div>
        </form>
      </main>
    </>
  );
}
