import * as React from 'react'
import useDragging from '..'

const dragStyle: React.CSSProperties = {
  position: 'absolute',
  padding: '12px',
  display: 'inline-block',
  border: '1px solid black',
  userSelect: 'none',
  cursor: 'move'
}

export default function App () {
  const ref = React.useRef(null)
  const [position, setPosition] = React.useState({ top: 100, left: 100 })

  const dragging = useDragging(ref, (e) => {
    const { clientX, clientY } = (e as TouchEvent).touches
      ? (e as TouchEvent).touches[0]
      : (e as MouseEvent)

    setPosition({ top: clientY, left: clientX })
  })

  const style = { ...dragStyle, ...position }

  return (
    <div ref={ref} style={style}>
      dragging: {dragging.toString()}
    </div>
  )
}
