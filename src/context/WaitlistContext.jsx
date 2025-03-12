import React, { createContext, useState, useEffect } from "react";

export const WaitlistContext = createContext();

const validInviteCodes = ["austin234", "alvin145", "karthik321"];

export const WaitlistProvider = ({ children }) => {
  const [waitlist, setWaitlist] = useState({ general: [], priority: [] });
  const [loading, setLoading] = useState(false);

  const addUserToWaitlist = (name, inviteCode) => {
    setLoading(true);
    setTimeout(() => {
      setWaitlist((prevWaitlist) => {
        const inviteValid = validInviteCodes.includes(inviteCode);
        const newUser = {
          name,
          inviteCode: inviteValid ? "Valid" : inviteCode ? "Invalid" : "None",
          type: inviteValid ? "Priority" : "General",
        };

        return inviteValid
          ? { ...prevWaitlist, priority: [...prevWaitlist.priority, newUser] }
          : { ...prevWaitlist, general: [...prevWaitlist.general, newUser] };
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <WaitlistContext.Provider value={{ waitlist, addUserToWaitlist, loading }}>
      {children}
    </WaitlistContext.Provider>
  );
};
