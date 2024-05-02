import { createContext, useState } from "react";
import cookies from "react-cookies";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = () => {
    setError("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,25})/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8-25 characters long, contain at least one uppercase letter, and one special character."
      );
      return;
    }

    let response;
    try {
      response = await BaseAPI.post(endpoints["login"], {
        username: username,
        password: password,
      });

      let accessToken = response.data.access;
      cookies.save("access", accessToken);

      let user = await BaseAPI.get(endpoints["current_user"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access")}`,
        },
      });

      cookies.save("user", user.data);
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim() || !email.trim()) {
      setError("Please enter full fields !");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,25})/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8-25 characters long, contain at least one uppercase letter, and one special character."
      );
      return;
    }

    let response;
    try {
      response = await BaseAPI.post(endpoints["register"], {
        username: username,
        email: email,
        password: password,
      });
      navigate("/signin");
    } catch (error) {
      if (error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleLogout = () => {
    cookies.remove("access");
    cookies.remove("user");
    navigate("/login");
  };

  const handleAddToCart = (product) => {
    setCartItem((prevState) => [...prevState, product]);
  };

  const handleBuying = (product) => {
    setCartItem((prevState) => [...prevState, product]);
    navigate("/checkout");
  };

  const handleRemoveFromCart = (product) => {
    const newCartItem = cartItem.filter((item) => item.id !== product.id);
    setCartItem(newCartItem);
  };

  const handleDeleteProduct = (productId) => {
    const newCartItem = cartItem
      .map((item) => {
        if (item.id === productId) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    setCartItem(newCartItem);
  };

  const handleIncrease = (productName) => {
    const newCartItem = cartItem.map((item) => {
      if (item.name === productName) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCartItem(newCartItem);
  };

  const handleDecrease = (productName) => {
    const productToRemove = cartItem.find((item) => item.name === productName);
    if (!productToRemove) {
      return;
    }

    if (productToRemove.amount - 1 === 0) {
      const confirmation = window.confirm(
        "Are you sure you want to remove this product from your cart?"
      );
      if (!confirmation) {
        return;
      }
    }
    const newCartItem = cartItem
      .map((item) => {
        if (item.name === productName) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    setCartItem(newCartItem);
  };

  const navigate = useNavigate();

  const contextValues = {
    user,
    cartItem,
    setCartItem,
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrease,
    handleDecrease,
    handleDeleteProduct,
    handleChange,
    handleLogin,
    handleRegister,
    handleBuying,
    handleLogout,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
