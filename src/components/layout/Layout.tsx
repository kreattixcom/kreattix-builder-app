import { classnames } from '@kreattix/utils'
import { FC, HTMLAttributes } from 'react'

import {
  AlignItemTypes,
  FlexDirectionTypes,
  HeightTypes,
  JustifyContentTypes,
  SpacingTypes,
  WidthTypes
} from '../../types'
import styles from './layout.module.scss'

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  gap?: SpacingTypes
  height?: HeightTypes
  items?: AlignItemTypes
  justify?: JustifyContentTypes
  direction?: FlexDirectionTypes
  width?: WidthTypes
}

export const Layout: FC<LayoutProps> = ({
  className,
  height,
  items,
  justify,
  gap,
  width,
  direction,
  ...props
}) => {
  const wrapperClass = classnames(
    styles.layout,
    {
      [`flex-${direction}`]: direction,
      [`gap-${gap}`]: gap,
      [`h-${height}`]: height,
      [`items-${items}`]: items,
      [`justify-${justify}`]: justify,
      [`w-${width} max-w-full`]: width
    },
    className
  )
  return <div className={wrapperClass} {...props} />
}
