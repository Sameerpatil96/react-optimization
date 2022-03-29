import { useState } from "react";
import ProfileContext from "../contexts/PofileContext";
import TopNav from "./TopNav";
import Page from "./Page";

function Maincontent() {
  const [username, setUsername] = useState("Sameer");

  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TopNav />
        <Page />
      </div>
    </ProfileContext.Provider>
  );
}

export default Maincontent;
