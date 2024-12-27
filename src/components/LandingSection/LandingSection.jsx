import clsx from 'clsx';
import styles from './LandingSection.module.css';

const LandingSection = ({ title, subtitle, children, srOnly }) => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={clsx(styles.sectionTitle, srOnly && 'sr-only')}>
          {title}
        </h2>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        <hr className={styles.sectionDivider} />
        {children}
      </div>
    </section>
  );
};

export default LandingSection;
