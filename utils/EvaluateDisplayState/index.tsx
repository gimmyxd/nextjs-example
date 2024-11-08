import React from 'react'

type DisplayState = Readonly<{
  [key: string]: string | boolean
}>

type EvaluateDisplayStateProps = {
  children: React.ReactElement
  displayState: DisplayState
}

const EvaluateDisplayStateComponent: React.FC<EvaluateDisplayStateProps> = ({
  children,
  displayState,
}) => {
  const isVisible = displayState.visible
  const isEnabled = displayState.enabled

  return <>{isVisible && React.cloneElement(children, { disabled: !isEnabled })}</>
}

const EvaluateDisplayState = React.memo(EvaluateDisplayStateComponent)

export default EvaluateDisplayState
