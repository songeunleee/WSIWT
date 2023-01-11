import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { onUserStateChange } from "./api/firebase";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet user={user} />
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
