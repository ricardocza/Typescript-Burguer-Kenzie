import { UserProvider } from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { RegisterPage } from "./pages/Register";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <CartProvider>
              <HomePage />
            </CartProvider>
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
