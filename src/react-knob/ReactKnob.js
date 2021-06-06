import React, { useState, useRef, useEffect } from 'react'

import Ticks from './Ticks'

import './styles/knob.scss'

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
    label,
    minMaxLabels = true,
    ...props
}) => {
    const valueRef = useRef(value)
    const wheelRef = useRef()
    const lastTouchMoveY = useRef()

    const onWheel = e => {
        onChange?.(Math.min(Math.max(valueRef.current + e.deltaY, minValue), maxValue))
        e.preventDefault()
    }

    useEffect(() => {
        valueRef.current = value
    }, [value])

    useEffect(() => {
        wheelRef.current.addEventListener('wheel', onWheel)
        return () => {
            wheelRef.current.removeEventListener('wheel', onWheel)
        }
    }, [])

    const onKeyDown = ({ key, shiftKey }) => {
        if ('ArrowUp' === key) {
            onChange?.(Math.min(value + (shiftKey + (maxValue - minValue) / ((shiftKey ? 2 : 1) * keyStepPct)), maxValue))
        } else if ('ArrowDown' === key) {
            onChange?.(Math.max(value - (shiftKey + (maxValue - minValue) / ((shiftKey ? 2 : 1) * keyStepPct)), minValue))
        }
    }

    const onTouchStart = e => {
        lastTouchMoveY.current = e.touches[0].clientY
    }

    const onTouchMove = e => {
        const delta = lastTouchMoveY.current - e.touches[0].clientY
        onChange?.(Math.min(Math.max(value + (delta * 3.5), minValue), maxValue))
        lastTouchMoveY.current = e.touches[0].clientY
    }

    const angle = (value / maxValue) * 270
    const style = { transform: `rotate(${angle}deg)`}

    return (
        <div
            ref={wheelRef}
            role="slider"
            tabIndex="0"
            className={`knob-container ${className}`}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            aria-valuenow={value}
            aria-label={props['aria-label'] || label}>
            <div className="knob-dial">
                <div className="knob" style={style} />
                <div className="knob-focus-ring" />
                <Ticks ticks={ticks} angle={angle} />
            </div>
            {minMaxLabels && <span className="min">{minLabel}</span>}
            {minMaxLabels && <span className="max">{maxLabel}</span>}
            {label && <span className="label">{label}</span>}
        </div>
    )
}

export default ReactKnob
