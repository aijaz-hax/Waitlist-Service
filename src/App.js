import { WaitlistProvider } from "./context/WaitlistContext";
import WaitlistForm from "./pages/WaitlistForm";
import WaitlistDisplay from "./pages/WaitlistDisplay";
import RealTimeWaitlistSimulator from "./pages/RealTimeWaitlistSimulator";
import { Box } from "@mui/material";

const App = () => (
  <WaitlistProvider>
  <div style={{display:"flex",gap:"16px",justifyContent:"space-between"}}>
    <WaitlistForm />
    {/* Logo here */}
    <Box component="img"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png"
        alt="Lyft Logo"
        sx={{ height: 50,margin:"32px" }} // Adjust the size as needed
      />
  </div>
    <WaitlistDisplay />

  </WaitlistProvider>
);

export default App;
