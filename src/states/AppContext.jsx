import { createContext, useState } from "react";
import cookies from "react-cookies";
import BaseAPI, { endpoints } from "../api/BaseAPI";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Adding prouduct", product);
    setCartItem((prevState) => [...prevState, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const newCartItem = cartItem.filter((item) => item.id !== productId);
    setCartItem(newCartItem);
  };

  const handleDeleteProduct = (productId) => {
    // const updatedCart = cartItem.filter((item) => item.id !== productId);

    const newCartItem = cartItem
      .map((item) => {
        if (item.id === productId) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    setCartItem(newCartItem);

    // setCartItem(updatedCart);
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
  // const handleDecrease = (productName) => {
  //   const newCartItem = cartItem
  //     .map((item) => {
  //       if (item.name === productName) {
  //         return { ...item, amount: item.amount - 1 };
  //       }
  //       return item;
  //     })
  //     .filter((item) => item.amount > 0);
  //   setCartItem(newCartItem);
  // };

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

  const handleLogin = async (username, password) => {
    let response = await BaseAPI.post(endpoints["login"], {
      username: username,
      password: password,
    });
    console.log(response.data);
    let accessToken = response.data.access;
    cookies.save("access", accessToken);

    let user = await BaseAPI.get(endpoints["current_user"], {
      headers: {
        Authorization: `Bearer ${cookies.load("access")}`,
      },
    });

    navigate("/");
  };

  const contextValues = {
    user,
    cartItem,
    setCartItem,
    handleLogin,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrease,
    handleDecrease,
    handleDeleteProduct,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
