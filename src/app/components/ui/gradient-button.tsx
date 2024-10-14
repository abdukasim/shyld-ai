import React from "react";
import Link from "next/link";

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  isLink?: boolean;
  outlined?: boolean;
  textColor?: string;
  children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href = "",
  onClick,
  isLink = true,
  outlined = false,
  textColor = "black",
  children,
}) => {
  const gradientStyle = outlined
    ? {}
    : {
        background: "linear-gradient(135deg, #00FCFF 0%, #24689B 100%)",
      };

  const commonClasses = `px-10 py-3 rounded-full hover:opacity-90 transition-opacity ${
    outlined ? `gradient-outline text-${textColor}` : `text-${textColor}`
  }`;

  if (isLink) {
    return (
      <Link href={href} className={commonClasses} style={gradientStyle}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={commonClasses} style={gradientStyle}>
        {children}
      </button>
    );
  }
};

export default GradientButton;
