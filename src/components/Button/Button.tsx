import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
  onClick,
  children,
  ariaLabel,
}) => {
  // Classes dinâmicas baseadas nas props
  const buttonClasses = [
    styles.button,
    styles[variant], // Ex: styles.primary
    styles[size], // Ex: styles.medium
    disabled || loading ? styles.disabled : "", // Estado desabilitado
    loading ? styles.loading : "", // Estado de carregamento
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <span className={styles.spinner} aria-label="Carregando"></span>
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
