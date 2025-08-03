import { useState } from 'react';
import type { DetailsHTMLAttributes } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import styles from './Accordion.module.scss';

export type AccordionProps = DetailsHTMLAttributes<HTMLDetailsElement> & {
  title: string;
  children: React.ReactNode;
  open?: boolean;
};

export const Accordion = ({
  title,
  children,
  open = true,
  ...rest
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(e.currentTarget.open);
  };

  return (
    <details
      className={styles.accordion}
      open={open}
      onToggle={handleToggle}
      {...rest}
    >
      <summary className={styles.summary}>
        <span>{title}</span>
        <span className={styles.icon}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
};
