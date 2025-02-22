import { classnames } from '@kreattix/utils'
import { FC, HTMLAttributes } from 'react'

import { SpacingTypes, WidthTypes } from '../../types'
import styles from './card.module.scss'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  width?: WidthTypes
  gap?: SpacingTypes
}

export const Card: FC<CardProps> = ({ className, width, gap, ...props }) => {
  const wrapperClass = classnames(
    styles.card,
    {
      [`w-${width} max-w-full`]: width,
      [`gap-${gap}`]: gap
    },
    className
  )
  return <div className={wrapperClass} {...props} />
}
