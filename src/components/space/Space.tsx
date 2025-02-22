import { FC } from 'react'

import { Layout, LayoutProps } from '../layout/Layout'

export type SpaceProps = LayoutProps

export const Space: FC<SpaceProps> = ({
  direction = 'row',
  items = 'center',
  justify = 'start',
  ...props
}) => {
  return <Layout direction={direction} items={items} justify={justify} {...props} />
}
