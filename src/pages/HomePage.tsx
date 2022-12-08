import React from "react";
import { logout, selectedUser } from "../features/auth/authSlice";
import HeaderComponent from "../features/auth/components/HeaderComponent";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hook";

const HomePage = () => {

  const dispatch = useAppDispatch()


  const logoutHandler = () => {
    dispatch(logout())
  }
  return (<>
    <HeaderComponent />
  </>)
};

export default HomePage;
