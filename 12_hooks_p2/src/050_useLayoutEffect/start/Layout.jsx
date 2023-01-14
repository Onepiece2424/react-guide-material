import { useState, useLayoutEffect } from "react";

const Layout = () => {
const [name, setName] = useState("dev.K");

useLayoutEffect(() => {
    if (name === "dev.K") {
      setName("Taro");
    }
  }, [name]);

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default  Layout
;
