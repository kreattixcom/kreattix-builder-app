import { classnames } from '@kreattix/utils'
import { FC, HTMLAttributes } from 'react'

import { VariantTypes } from '../../types'
import { ripple } from '../../utils/ripple'
import { Icon, IconNameTypes, IconTypes } from '../icons/Icon'
import styles from './button.module.scss'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: VariantTypes
  iconName?: IconNameTypes
  icon?: FC<React.SVGProps<SVGSVGElement>>
  iconType?: IconTypes
  type?: 'solid' | 'plain'
  htmlType?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  onClick,
  iconName,
  icon,
  iconType,
  type = 'solid',
  htmlType = 'button',
  ...props
}) => {
  const wrapperClass = classnames(
    styles.button,
    {
      [styles[`button-${type}`]]: type,
      [styles[`button-${variant}`]]: variant
    },
    className
  )
  return (
    <button
      type={htmlType}
      className={wrapperClass}
      onClick={(event) => {
        ripple(event)
        if (onClick) onClick(event)
      }}
      {...props}
    >
      {(iconName || icon) && <Icon icon={icon} iconName={iconName} type={iconType} />}
      <span>{children}</span>
    </button>
  )
}
