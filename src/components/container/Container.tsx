import { FC } from 'react'

import { Layout, LayoutProps } from '../layout/Layout'
import styles from './container.module.scss'

export type ContainerProps = LayoutProps

export const Container: FC<ContainerProps> = ({ ...props }) => {
  return <Layout className={styles.container} {...props} />
}
