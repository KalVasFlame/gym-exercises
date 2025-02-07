import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto" p="20px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
