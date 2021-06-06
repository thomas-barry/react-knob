### @baldwinbarry/react-knob

##### Knob component built with React. Inspired by a [codepen](https://codepen.io/blucube/pen/cudAz) by Ed Hicks.

### Installation

**npm**

```bash
npm install @baldwinbarry/react-knob --save
```

**yarn**

```bash
yarn add @baldwinbarry/react-knob 
```

### Properties

| Property     | Default | Description            
|--------------|---------|------------------------
| value        |         | Current knob value     
| onChange     |         | Function to call when value changes
| minValue     | 0       | Minimum knob value
| maxValue     | 255     | Maximum knob value
| minLabel     | Min     | Minimum label
| maxLabel     | Max     | Maximum label
| minMaxLabels | true    | Render min/max labels
| ticks        | 28      | Number of ticks
| keyStepPct   | 10      | Percent increase/decrease for key events
| className    |         | Override styles
| label        |         | Text to render below knob

### Example
```
import React, { useState } from 'react'
import ReactKnob from '@baldwinbarry/react-knob'

const Example = () => {
    const [volume, setVolume] = useState(0)
    return (
        <ReactKnob value={volume} onChange={setVolume} />
    )
}

export default Example
```

### Styling: Size
By default, the knob component renders inside a 200px square container. Control the size of the knob by overriding width and height rules on the knob-container class:

```
.my-knob {
  .knob-container {
    width: 150px;
    height: 150px;
  }
}

<ReactKnob className="my-knob" />
```

###Styling: Color
Change knob colors by overriding CSS custom properties. Color values must be provided as comma-separated RGB values.

| Property | Default | Description
| ---------|---------|-------------
| --color-knob-dial | 24, 24, 24 | Dial color |
| --color-knob-light | 168, 216, 248 | Color of active ticks and knob light |
| --color-knob-tick | 200, 200, 200 | Color of inactive ticks |
| --color-knob-label| 200, 200, 200 | Color of knob labels |

```
.my-knob {
  __color-knob-light: 255, 0, 0;
}

<ReactKnob className="my-knob" />
```


