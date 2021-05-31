import React, { useState } from "react"

import ReactKnob from '../react-knob/ReactKnob'

import './styles/index.scss'

const App = () => {
    const [value, setValue] = useState(0)
    return (
        <div className="container">
            <ReactKnob minValue={0} maxValue={1000} value={value} onChange={setValue} keyStepPct={10} />
        </div>
    )
}

export default App
