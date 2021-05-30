import React from 'react'

const getTickAngle = ({ ticks, tickNum }) => -135 + ((280 / ticks) * tickNum)

const Ticks = ({ ticks = 28, angle = 0 }) => {
    return (
        <React.Fragment>
            {Array.from(Array(ticks).keys()).map(tickNum => {
                const tickAngle = getTickAngle({ ticks, tickNum })
                return (
                    <div
                        key={tickNum}
                        className={`tick ${tickAngle <= angle - 135 ? 'active' : ''}`}
                        style={{ transform: `rotate(${tickAngle}deg)`}}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default Ticks
