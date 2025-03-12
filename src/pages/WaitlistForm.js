import React, { useState, useContext } from "react";
import { Container, TextField, Button, Paper, Typography, Box } from "@mui/material";
import { WaitlistContext } from "../context/WaitlistContext";
import RealTimeWaitlistSimulator from "./RealTimeWaitlistSimulator";

const WaitlistForm = () => {
    const { addUserToWaitlist } = useContext(WaitlistContext);
    const [name, setName] = useState("");
    const [inviteCode, setInviteCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addUserToWaitlist(name, inviteCode);
            setName("");
            setInviteCode("");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}> {/* Left-align the box */}
                <Paper elevation={3} sx={{ p: 3, width: "400px" }}> {/* Fixed width for better alignment */}
                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"}}>
                   
                    <Typography variant="h5" gutterBottom sx={{
                        color: "#333347",
                        fontFamily: "Helvetica Neue, Arial, sans-serif",
                    }}>
                        Join the Waitlist
                    </Typography>
                    <RealTimeWaitlistSimulator />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            size="small"
                            sx={{
                                mb: 2,
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#FF00BF", // Lyft Pink Border
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#E000AC", // Darker Lyft Pink on Hover
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#352384", // Mulberry (Focus Color)
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#333347", // Charcoal (Label Text)
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#352384", // Mulberry (Focused Label)
                                },
                            }}

                        />
                        <TextField
                            label="Invite Code (optional)"
                            fullWidth
                            value={inviteCode}
                            onChange={(e) => setInviteCode(e.target.value)}
                            size="small"
                            sx={{
                                mb: 2,
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#FF00BF", // Lyft Pink Border
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#E000AC", // Darker Lyft Pink on Hover
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#352384", // Mulberry (Focus Color)
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#333347", // Charcoal (Label Text)
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#352384", // Mulberry (Focused Label)
                                },
                            }}

                        />
                        <Button variant="contained" color="primary" fullWidth type="submit" sx={{
                            whiteSpace: "nowrap", backgroundColor: "#FF00BF",
                            color: "#FFFFFF",
                            '&:hover': {
                                backgroundColor: "#E000AC",
                            },
                        }}>
                            Join Waitlist
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default WaitlistForm;
