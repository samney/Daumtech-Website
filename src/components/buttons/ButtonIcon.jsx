import React from "react";

const ButtonIcon = ({
  href = "#",
  text = "Title",
  target = "_self",
  color = "bg-[#F8F8F8]",
  textColor = "text-gray-600",
  borderColor = "border-gray-300",
  hoverBg = "hover:bg-[#FFEFD2]",
  imageSrc,
  rightIconSrc,
  iconSize = "h-5 w-5",
  size = "md",
  gap = "gap-2",
  variation = "text+icon",
  padding = "",
  px = "px-2.5",
  py = "py-auto",
  iconPosition = "right",
  borderRadius = "rounded-lg",
  onClick,
  isLink = false,
}) => {
  const sizeClasses = {
    xs: "text-[0.444rem] text-normal tracking-wide h-12",
    sm: "text-xs h-6",
    md: "text-xs h-8",
    lg: "text-xs h-10",
    xl: "text-sm h-10",
    xxl: "text-lg h-10",
  };

  const flexDirection =
    iconPosition === "top" ? "flex-col-reverse" : "flex-row";

  const linkContent = (
    <>
      {variation !== "icon" && imageSrc && iconPosition !== "top" && (
        <img src={imageSrc} alt="Left Icon" className={iconSize} />
      )}

      {variation !== "icon" && text && (
        <span className="font-medium">{text}</span>
      )}

      {variation === "text+icon" && iconPosition === "top" && imageSrc && (
        <img src={imageSrc} alt="Top Icon" className={iconSize} />
      )}

      {(variation === "text+icon" || variation === "icon") &&
        iconPosition !== "top" &&
        rightIconSrc && (
          <img src={rightIconSrc} alt="Right Icon" className={iconSize} />
        )}
    </>
  );

  const ElementType = isLink ? "a" : "div";

  return (
    <ElementType
      href={isLink ? href : undefined}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`flex justify-center items-center m-0 border text-center
      ${sizeClasses[size]} ${color} ${textColor} ${borderColor} ${hoverBg} ${gap}
      ${padding} ${px} ${py} ${flexDirection} ${borderRadius}`}
      onClick={onClick}
    >
      {linkContent}
    </ElementType>
  );
};

export default ButtonIcon;
