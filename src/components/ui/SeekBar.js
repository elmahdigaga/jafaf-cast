'use client'
import { Range, getTrackBackground } from 'react-range'

const MIN = 0
const MAX = 100

export default function Seekbar({ value, onChange }) {
  return (
    <Range
      values={[value]}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: '6px',
              width: '100%',
              borderRadius: '6  px',
              background: getTrackBackground({
                values: [value],
                colors: ['#3b82f6', '#e2e8f0'],
                min: MIN,
                max: MAX,
              }),
              alignSelf: 'center',
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className="h-[16px] w-[16px] rounded-full border border-slate-100 bg-primary"
        ></div>
      )}
    />
  )
}
