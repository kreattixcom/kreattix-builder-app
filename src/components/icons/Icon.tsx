import * as OutlinedIcons from '@heroicons/react/24/outline'
import * as SolidIcons from '@heroicons/react/24/solid'
import { classnames } from '@kreattix/utils'
import { FC, SVGProps } from 'react'

import { FontSizeType } from '../../types'
import styles from './icon.module.scss'

export type IconNameTypes = keyof typeof OutlinedIcons & keyof typeof SolidIcons
export type IconTypes = 'outlined' | 'solid'

export interface IconProps {
  type?: IconTypes
  iconName?: IconNameTypes
  icon?: FC<React.SVGProps<SVGSVGElement>>
  size?: FontSizeType
}

export const Icon: FC<IconProps> = ({
  size = 'md',
  type = 'outlined',
  iconName,
  icon,
  ...props
}) => {
  const wrapperClass = classnames(styles.icon, {
    [`text-${size}`]: size
  })
  if (iconName) {
    const Icon = type === 'outlined' ? OutlinedIcons[iconName] : SolidIcons[iconName]
    const Component = Icon as FC<SVGProps<SVGSVGElement>>
    return <Component className={wrapperClass} {...props} />
  }
  if (icon) {
    const Component = icon
    return <Component className={wrapperClass} {...props} />
  }
  return null
}
