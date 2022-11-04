import React from 'react';
import styles from '../styles/modules/title.module.scss';

// function PageTitle() {
//   return (
//     <div>
//       <h1>Md. Fahad kabir</h1>
//     </div>
//   );
// }

// if we use children
// function PageTitle({ children }) {
//   return <p className={style.title}>{children}</p>;
// }

// if we have any other props in this componenet we also need them in our paragraph
function PageTitle({ children, ...rest }) {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
}

export default PageTitle;
