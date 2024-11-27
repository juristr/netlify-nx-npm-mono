import React from "react";
import { getButtonLabel } from "@myorg/shared-text";

interface FancyButtonProps {
  action: string;
  onClick?: () => void;
}

export const FancyButton: React.FC<FancyButtonProps> = ({
  action,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",
      }}
    >
      {getButtonLabel(action)}
    </button>
  );
};
