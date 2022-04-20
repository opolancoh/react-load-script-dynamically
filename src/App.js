/* eslint-disable no-undef */
import "./App.css";
import { useEffect, useState } from "react";
import MyComponent from "./MyComponent";
import { loadDynamicScript, useScript } from "./loadScript";

export default function App() {
  // Using loadDynamicScript function
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => {
    console.log("Script loaded from App.js");
    setLoaded(true);
  };

  useEffect(() => {
    loadDynamicScript(
      "underscore",
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.2/underscore-min.js",
      handleLoaded
    );
  }, []);

  if (loaded) return <MyComponent title="My Component" />;
  return <h1>Not Loaded</h1>;

  /* 
  // Using useScript hook
  const status = useScript(
    "https://pm28k14qlj.codesandbox.io/test-external-script.js"
  );

  return (
    <div>
      <div>
        Script status: <b>{status}</b>
      </div>
      {status === "ready" && (
        <div>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  );
  */
}
