import React from "react";
import { getCardText } from "@myorg/shared-text";

interface InfoCardProps {
  title: string;
  children?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{title}</h3>
      <p style={{ color: "#666", marginBottom: "10px" }}>
        {getCardText(title)}
      </p>
      {children}
    </div>
  );
};
