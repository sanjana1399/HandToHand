import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

export const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export const ButtonWithNavigation = ({ children, to, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button className={`button ${className}`} onClick={() => navigate(to)}>
      {children}
    </button>
  );
};

