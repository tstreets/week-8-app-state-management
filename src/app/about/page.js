"use client";
import useAppState from "../../hooks/useAppState";

export default function About() {
  const appState = useAppState();

  console.log(appState);

  return (
    <>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}
