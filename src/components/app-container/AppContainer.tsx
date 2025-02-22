import { classnames } from '@kreattix/utils'
import { FC, HTMLAttributes } from 'react'

import styles from './app-container.module.scss'

export type AppContainerProps = HTMLAttributes<HTMLDivElement>

export const AppContainer: FC<AppContainerProps> = ({ className, ...props }) => {
  const wrapperClass = classnames(styles.appContainer, className)
  return <div className={wrapperClass} {...props} />
}
