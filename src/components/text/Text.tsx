import { classnames } from '@kreattix/utils'
import { FC, ForwardRefExoticComponent, HTMLAttributes } from 'react'

import { FontWeightTypes } from '../../types'
import styles from './text.module.scss'

export interface TextProps {
  weight?: FontWeightTypes
  muted?: boolean
}

interface TextBaseProps extends TextProps {
  as?: keyof JSX.IntrinsicElements
}

export interface TextComponentProps
  extends ForwardRefExoticComponent<TextProps & HTMLAttributes<HTMLParagraphElement>> {
  Paragraph: typeof Paragraph
  Label: typeof Label
  Subtitle: typeof Subtitle
  Title: typeof Title
  Heading: typeof Heading
  Display: typeof Display
}

const TextBase: FC<TextBaseProps> = ({ weight, muted, as: Wrapper = 'p', ...props }) => {
  const elementClassMap = {
    label: styles['text-label'],
    p: styles['text-paragraph'],
    h4: styles['text-subtitle'],
    h3: styles['text-title'],
    h2: styles['text-heading'],
    h1: styles['text-display']
  }
  const elementClass = elementClassMap[Wrapper as keyof typeof elementClassMap]
  const wrapperClass = classnames(elementClass, {
    [`font-${weight}`]: weight,
    [styles['text-muted']]: muted
  })
  return <Wrapper className={wrapperClass} {...props} />
}

const Label: FC<TextProps & HTMLAttributes<HTMLLabelElement>> = (props) => (
  <TextBase {...props} as="label" />
)
const Paragraph: FC<TextProps & HTMLAttributes<HTMLParagraphElement>> = (props) => (
  <TextBase {...props} as="p" />
)
const Subtitle: FC<TextProps & HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <TextBase {...props} as="h4" />
)
const Title: FC<TextProps & HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <TextBase {...props} as="h3" />
)
const Heading: FC<TextProps & HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <TextBase {...props} as="h2" />
)
const Display: FC<TextProps & HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <TextBase {...props} as="h1" />
)

export const Text = Paragraph as TextComponentProps
Text.Paragraph = Paragraph
Text.Label = Label
Text.Subtitle = Subtitle
Text.Title = Title
Text.Heading = Heading
Text.Display = Display
