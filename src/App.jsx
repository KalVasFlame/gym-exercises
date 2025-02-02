import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails";
import Home from "./pages/Home/Home";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
