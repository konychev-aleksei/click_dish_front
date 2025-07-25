import styles from "./Accordion.module.scss";

export type AccordionProps = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
};

export const Accordion = ({
  title,
  children,
  open = false,
}: AccordionProps) => {
  return (
    <details className={styles.accordion} open={open}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
};
