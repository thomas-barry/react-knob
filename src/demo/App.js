import React, { useState } from "react"

import ReactKnob from '../react-knob/ReactKnob'

import './styles/index.scss'

const App = () => {
    const [value, setValue] = useState(0)

    return (
        <ReactKnob
            className="my-knob"
            minValue={0}
            maxValue={1000}
            value={value}
            onChange={setValue}
            keyStepPct={10}
            minMaxLabels={false}
            label="vol"
            aria-label="volume"
        />
    )
}

export default App
