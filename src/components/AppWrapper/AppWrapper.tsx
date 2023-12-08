import React, { ReactNode } from 'react';
import styles from './AppWrapper.module.scss';

interface AppWrapperProps{
    children: ReactNode
}

const AppWrapper: React.FC<AppWrapperProps> = ({children}) => {
  return (
    <div className={`app ${styles.wrapper}`}>
        {children}
    </div>
  )
}

export default AppWrapper