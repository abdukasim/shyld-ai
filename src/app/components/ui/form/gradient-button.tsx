import React from "react";
import Link from "next/link";

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  isLink?: boolean;
  outlined?: boolean;
  textColor?: string;
  children: React.ReactNode;
  circular?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href = "",
  onClick,
  isLink = true,
  outlined = false,
  textColor = "black",
  circular = false,
  children,
}) => {
  const gradientClasses = outlined
    ? ""
    : "bg-gradient-to-br from-[#00FCFF] to-[#24689B] hover:bg-none hover:bg-white transition-all duration-300";

  const commonClasses = `${
    circular ? "p-[10px] rounded-full w-auto" : "px-10 py-3"
  } rounded-full w-full md:w-auto text-center ${
    outlined ? `gradient-outline text-${textColor}` : `text-${textColor}`
  } ${gradientClasses}`;

  if (isLink) {
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={commonClasses}>
        {children}
      </button>
    );
  }
};

export default GradientButton;
