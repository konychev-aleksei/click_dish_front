import cn from "classnames";
import styles from "./Spinner.module.scss";

export type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => (
  <span className={cn(styles.spinner, className)} />
);
