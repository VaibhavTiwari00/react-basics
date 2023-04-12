import { createContext } from "react";

const UserContext = createContext({
  user: { name: "dummy Tiwari", email: "vaibahvtiwari647@gmail.com" },
});

UserContext.displayName = "UserContext";

export default UserContext;
