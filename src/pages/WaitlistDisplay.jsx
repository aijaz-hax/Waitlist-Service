import React, { useContext, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Pagination,
} from "@mui/material";
import { WaitlistContext } from "../context/WaitlistContext";
import LoadingSpinner from "./LoadingSpinner";

const WaitlistDisplay = () => {
  const { waitlist, loading } = useContext(WaitlistContext);
  const combinedList = [...waitlist.priority, ...waitlist.general];

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handlePageChange = (event, value) => setPage(value);
  const paginatedList = combinedList.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: "#FFF", borderRadius: 2 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#333347",
            fontFamily: "Circular, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          Current Waitlist
        </Typography>

        {loading ? (
          <LoadingSpinner />
        ) : combinedList.length === 0 ? ( // ✅ If no users, show a message
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#888",
              fontFamily: "Circular, Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              py: 3,
            }}
          >
            No users in the waitlist
          </Typography>
        ) : (
          <>
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "#F3F3F5",
                borderRadius: 2,
                overflow: "hidden",
                height: "calc(100vh - 460px)",
                overflowY: "auto",
                scrollbarWidth: "thin",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#333347" }}>
                    {["Position", "Name", "Invite Code Status", "Type", "Estimated Wait Time"].map((head) => (
                      <TableCell key={head} sx={{ color: "white", fontWeight: "bold", fontFamily: "Circular, Arial, sans-serif" }}>
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedList.map((user, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        backgroundColor:
                          user.type === "Priority"
                            ? "#FF00BF1A" // Lyft Light Pink (for priority)
                            : index % 2 === 0
                            ? "#F3F3F5"
                            : "#FFFFFF",
                        "&:hover": { backgroundColor: "#FFE6F0" }, // Lyft hover color
                      }}
                    >
                      <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.inviteCode}</TableCell>
                      <TableCell>{user.type}</TableCell>
                      <TableCell>{(page - 1) * rowsPerPage + index + 1} days</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Pagination
              count={Math.ceil(combinedList.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                "& .MuiPaginationItem-root": {
                  fontFamily: "Circular, Arial, sans-serif",
                  color: "#333347",
                },
                "& .Mui-selected": {
                  backgroundColor: "#FF00BF",
                  color: "white",
                },
              }}
            />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default WaitlistDisplay;
