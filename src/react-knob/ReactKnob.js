import React from 'react'

import Ticks from './Ticks'

import './styles/knob.scss'

// https://codepen.io/blucube/pen/cudAz

const ReactKnob = ({
    value = 0,
    onChange,
    minValue = 0,
    maxValue = 255,
    minLabel = 'Min',
    maxLabel = 'Max',
    ticks = 28,
    keyStepPct = 10,
    className,
}) => {

    const onWheel = e =>
        onChange?.(Math.min(Math.max(value + e.deltaY, minValue), maxValue))

    const onKeyDown = ({ key, shiftKey }) => {
        if ('ArrowUp' === key) {
            onChange?.(Math.min(value + (shiftKey + (maxValue - minValue) / ((shiftKey ? 2 : 1) * keyStepPct)), maxValue))
        } else if ('ArrowDown' === key) {
            onChange?.(Math.max(value - (shiftKey + (maxValue - minValue) / ((shiftKey ? 2 : 1) * keyStepPct)), minValue))
        }
    }

    const angle = (value / maxValue) * 270
    const style = { transform: `rotate(${angle}deg)`}

    return (
        <div
            role="slider"
            tabIndex="0"
            className={`knob-container ${className}`}
            onWheel={onWheel}
            onKeyDown={onKeyDown}
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            aria-valuenow={value}>
            <div className="knob-dial">
                <div className="knob" style={style} />
                <span className="min">{minLabel}</span>
                <span className="max">{maxLabel}</span>
                <div className="knob-focus-ring" />
                <Ticks ticks={ticks} angle={angle} />
            </div>
        </div>
    )
}

export default ReactKnob
