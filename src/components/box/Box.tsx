import { FC } from 'react'

import { Layout, LayoutProps } from '../layout/Layout'

export type BoxProps = LayoutProps

export const Box: FC<BoxProps> = ({ direction = 'column', ...props }) => {
  return <Layout direction={direction} {...props} />
}
