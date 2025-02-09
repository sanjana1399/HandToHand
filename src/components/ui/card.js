import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

export const Card = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export const CardWithNavigation = ({ children, to, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <div className={`card clickable ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
};

