import { useEffect, useContext, useState } from "react";
import { WaitlistContext } from "../context/WaitlistContext";
import { Button,Tooltip } from "@mui/material";

const randomNames = ["John", "Alice", "Bob", "Emma", "Liam", "Sophia", "Noah", "Olivia"];
const randomCodes = ["austin234", "alvin145", "invalid123", "", "", "", "karthik321"];

const RealTimeWaitlistSimulator = () => {
  const { addUserToWaitlist } = useContext(WaitlistContext);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    let interval;
    if (isSimulating) {
      interval = setInterval(() => {
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        const randomCode = randomCodes[Math.floor(Math.random() * randomCodes.length)];
        addUserToWaitlist(randomName, randomCode);
      }, 10000); // Adds a new user every 10 seconds
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isSimulating, addUserToWaitlist]);

  return (

<div style={{  display: "flex", flexDirection: "column" }}>
  <Tooltip 
    title="If you start this, the waitlist will be updated automatically after every 10 seconds" 
    arrow
  >
    <Button
      variant="contained"
      sx={{ whiteSpace: "nowrap", alignSelf: "flex-end", backgroundColor: "#FF00BF",
    color: "#FFFFFF",
    '&:hover': {
      backgroundColor: "#E000AC",
    }, }}
      color={isSimulating ? "secondary" : "primary"}
      onClick={() => setIsSimulating(!isSimulating)}
    >
      {isSimulating ? "Stop Simulation" : "Start Simulation"}
    </Button>
  </Tooltip>
</div>
  );
};

export default RealTimeWaitlistSimulator;
