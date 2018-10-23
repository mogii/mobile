import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Svg } from 'expo';

export default class TCLogoGlobe extends Component {
  render() {
    return (
      <Svg height={80} width={320}>
        <Svg.G>
          <Svg.Circle
            fill="#FFFFFF"
            cx={32}
            cy={32}
            r={24.1}
          />
          <Svg.RadialGradient
            id="SVGID_1_"
            cx="30.9825"
            cy="18.4201"
            r="37.6006"
            gradientUnits="userSpaceOnUse"
          />
          <Svg.Path
            strokeWidth={0.5}
            stroke="#fff"
            fill="#00bcd4"
            d="M12.2,26c0.5-1.2,1-3.2,0.1-3.8c-1.6-0.6-3.4,3.8-2.8,5.4C10,28.7,11.4,27.9,12.2,26z M11.8,41
            c-1-3.9,1.6-6,3.6-7.7c0.8-0.7,1.7-1.4,2-2.1c0,0,0.8-2.2-0.9-2.3C16,29,15.7,29,14.4,29.5c-1.4,0.5-3.4,1.3-4.5,0.6
            c-0.8-0.5-1.2-1.3-1.2-2.2c-0.1-1-0.2-0.8-0.4,0c-0.3,2.5-0.2,6.9,0.2,9.4c1.5,8.7,9.9,14.3,10.7,14.2c0-0.3,0-0.5-1.4-1.9
            C16,47.8,12.7,44.5,11.8,41z M51.4,45.9c-0.2,0-0.4,0.1-0.6,0.2c-1.4,0.8-4.5,4.4-4.2,4.6c0.4,0.3,2.3-1.1,3.7-2.8
            C51.2,47,51.7,45.9,51.4,45.9z M55.9,28c-0.2-0.8-0.4-1.8-0.6-2.6l0-0.1c-0.3,4.6-0.3,4.6-1.8,4.3c-1.1-0.2-2.5-1.2-4.3-2.6
            c-2-1.5-3-2.1-3.9-1.9c-0.7,0.3-0.8,1-0.8,1.1c-0.1,0.8,0,1.6,2.2,4c2.9,3.3,4.6,5.5,3.7,9.1c-0.9,3.6-5.2,5.3-7.4,7.3
            c-0.8,0.7-1.8,2.6-0.8,3c0.7,0.3,3.6-0.8,9.3-4.8c0,0,0.9-0.6,1.5-0.7c0.1-0.1,0.2-0.3,0.3-0.5c0.5-0.9,1.1-2.2,1.5-3.2l0.1-0.2
            C55.8,37,56.5,31.7,55.9,28z M28,18.7c1.9-1.3,0.7-4.5-1.4-4.9c-1.7-0.1-2.4,1.6-2.5,2.2C23.7,18.4,26.3,19.9,28,18.7z M21.8,43.6
            c0.9-0.3,1.3-0.6,3-2.5c1.9-2.1,4.7-5.3,8.6-6.2c1.9-0.4,5.5,1.7,7.2,1.9c0.5,0.1,1.3,0.2,1.9-0.1c0.8-0.5,1.2-2.4-0.6-3.3
            c-4.6-2.4-10.7-6.1-5.9-14.4c1.1-1.9-0.9-3.6-3.2-1.2c-1.9,1.9-4,3-6.3,3.1c-3.3,0.2-5.7-1.5-7-2.5c-0.7-0.5-1.2-0.9-1.7-0.8
            c-0.4,0.1-1.3,0.8-1.3,1.8c0,1,0.9,2.3,2.2,3.8c1.5,1.7,3.1,3.5,3.9,5.6c1.8,4.9-2.9,8.2-3.3,12.6C19.1,43.3,21.2,43.8,21.8,43.6z
            M39.8,12.4c0.8,1.4,0.5,3.4,0.3,4.6c-0.4,2.5-0.7,4,0.9,4.8c1.3,0.7,1.8-0.5,2.6-2.4c0.5-1.3,1-2.4,1.7-3.2
            c1.1-1.3,2.5-1.2,3.1-1.2c0.1,0,0.3,0,0.4,0c-0.7-1.4-3.3-3.2-5.6-4.4c-2.7-1.4-7-2.6-9.4-2.7c-0.4,0-1,0-1.4,0.2
            c0.2,0.2,0.2,0.2,1.9,0.8C38.6,10.2,39.1,11.2,39.8,12.4z M46.7,17c0,0.1-0.1,0.2-0.1,0.3c-0.2,1.2,0.7,3.4,2.3,4.4
            c1.6,0.8,1.7-0.7,1.3-2.1C49.4,17.3,47.4,15.7,46.7,17z M24.8,51.7c0-0.1,0-0.2,0-0.3c-0.3-1.2-2-2.8-3.9-3.1
            c-1.7-0.1-1.3,1.4-0.3,2.5C22.2,52.6,24.8,53.1,24.8,51.7z M39.5,54C35,54.5,34.1,53.9,33,53c-1.3-1-1.8-2.9-2.1-4.1
            c-0.7-2.4-1-3.9-2.8-4c-1.5-0.1-1.4,1.2-1.4,3.2c0,1.4,0.1,2.6-0.2,3.6c-0.5,1.7-1.8,2.1-2.3,2.3c-0.1,0-0.3,0.1-0.3,0.2
            c1.3,1,4.4,1.6,6.9,1.7c3,0.2,7.5-0.5,9.6-1.4c0.4-0.2,0.9-0.5,1.2-0.7C41.3,53.7,41.3,53.7,39.5,54z"
          />
        </Svg.G>
        <Svg.G>
          <Svg.Path fill="#4A4A4A" d="M75.1,40.1V28h-0.9c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3h0.9v-3.9c0-1.4,1.2-2.6,2.7-2.6
				c1.4,0,2.6,1.2,2.6,2.6v3.9h4.1c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3h-4.1v11.3c0,2.1,1,2.9,2.8,2.9c0.6,0,1.1-0.1,1.3-0.1
				c1.2,0,2.2,1,2.2,2.2c0,1-0.7,1.7-1.4,2c-1.1,0.4-2.2,0.6-3.6,0.6C77.9,46.9,75.1,45.2,75.1,40.1z"/>
          <Svg.Path fill="#4A4A4A" d="M86.8,35.1L86.8,35.1c0-6.7,5.2-12.1,12.3-12.1c7.1,0,12.3,5.4,12.3,12V35c0,6.5-5.2,12-12.4,12
				C92,47,86.8,41.6,86.8,35.1z M106.1,35.1L106.1,35.1c0-4.1-2.9-7.5-7.1-7.5c-4.2,0-6.9,3.3-6.9,7.3V35c0,4,2.9,7.4,7,7.4
				C103.4,42.4,106.1,39,106.1,35.1z"/>
          <Svg.Path fill="#4A4A4A" d="M134,44.1c0,1.4-1.2,2.6-2.7,2.6c-1.4,0-2.7-1.1-2.7-2.6v-1.2c-1.5,2.2-3.6,4.1-7.2,4.1
				c-5.2,0-8.2-3.5-8.2-8.9V25.8c0-1.5,1.2-2.7,2.6-2.7c1.5,0,2.7,1.2,2.7,2.7v10.7c0,3.6,1.8,5.6,4.9,5.6c3.1,0,5.2-2.1,5.2-5.7
				V25.8c0-1.5,1.2-2.7,2.7-2.7c1.4,0,2.7,1.2,2.7,2.7V44.1z"/>
          <Svg.Path fill="#4A4A4A" d="M137.3,25.8c0-1.5,1.1-2.7,2.6-2.7c1.5,0,2.7,1.2,2.7,2.7v2.4c1.2-2.9,3.5-5.1,5.8-5.1
				c1.7,0,2.6,1.1,2.6,2.6c0,1.4-0.9,2.3-2.1,2.5c-3.8,0.7-6.3,3.5-6.3,9v6.8c0,1.4-1.2,2.6-2.7,2.6c-1.4,0-2.6-1.1-2.6-2.6V25.8z"
          />
          <Svg.Path fill="#fff" d="M151.1,35.3L151.1,35.3c0-6.5,5-11.9,11.6-11.9c3.8,0,6.3,1.4,8.3,3.3c0.3,0.2,0.5,0.7,0.5,1.2
				c0,0.9-0.7,1.6-1.6,1.6c-0.4,0-0.8-0.2-1.1-0.4c-1.6-1.5-3.4-2.7-6.2-2.7c-4.6,0-8.1,3.9-8.1,8.7v0.1c0,4.9,3.6,8.8,8.3,8.8
				c2.6,0,4.6-1.2,6.3-2.8c0.2-0.2,0.5-0.4,1-0.4c0.8,0,1.5,0.7,1.5,1.5c0,0.4-0.2,0.8-0.4,1c-2.1,2.1-4.7,3.6-8.5,3.6
				C156,47,151.1,41.6,151.1,35.3z"/>
          <Svg.Path fill="#fff" d="M172.1,35.3L172.1,35.3c0-6.5,5-11.9,11.8-11.9c6.8,0,11.7,5.3,11.7,11.7v0.1c0,6.4-5,11.8-11.8,11.8
				C177,47,172.1,41.7,172.1,35.3z M192.2,35.3L192.2,35.3c0-4.9-3.6-8.9-8.4-8.9c-4.9,0-8.3,4-8.3,8.7v0.1c0,4.8,3.6,8.8,8.3,8.8
				C188.7,44,192.2,40,192.2,35.3z"/>
          <Svg.Path fill="#fff" d="M198.4,25.4c0-0.9,0.7-1.7,1.7-1.7c1,0,1.7,0.7,1.7,1.7v2.4c1.5-2.4,3.8-4.4,7.7-4.4c5.5,0,8.6,3.7,8.6,9
				V45c0,1-0.7,1.7-1.7,1.7c-1,0-1.7-0.7-1.7-1.7V33.3c0-4.2-2.3-6.8-6.2-6.8c-3.9,0-6.8,2.8-6.8,7.1V45c0,1-0.7,1.7-1.7,1.7
				c-1,0-1.7-0.7-1.7-1.7V25.4z"/>
          <Svg.Path fill="#fff" d="M222,25.4c0-0.9,0.7-1.7,1.7-1.7c1,0,1.7,0.7,1.7,1.7v2.4c1.5-2.4,3.8-4.4,7.7-4.4c5.5,0,8.6,3.7,8.6,9
				V45c0,1-0.7,1.7-1.7,1.7c-1,0-1.7-0.7-1.7-1.7V33.3c0-4.2-2.3-6.8-6.2-6.8c-3.9,0-6.8,2.8-6.8,7.1V45c0,1-0.7,1.7-1.7,1.7
				c-1,0-1.7-0.7-1.7-1.7V25.4z"/>
          <Svg.Path fill="#fff" d="M255.5,47c-6.2,0-11.3-4.8-11.3-11.7v-0.1c0-6.5,4.6-11.7,10.8-11.7c6.7,0,10.5,5.5,10.5,11.4
				c0,0.9-0.7,1.6-1.6,1.6h-16.3c0.5,4.9,3.9,7.6,7.9,7.6c2.8,0,4.8-1.1,6.5-2.6c0.3-0.2,0.6-0.4,1-0.4c0.8,0,1.5,0.7,1.5,1.4
				c0,0.4-0.2,0.8-0.5,1.1C261.9,45.6,259.3,47,255.5,47z M262.2,33.9c-0.3-4.1-2.7-7.7-7.2-7.7c-3.9,0-6.9,3.3-7.3,7.7H262.2z"/>
          <Svg.Path fill="#fff" d="M266.8,35.3L266.8,35.3c0-6.5,5-11.9,11.6-11.9c3.8,0,6.3,1.4,8.3,3.3c0.3,0.2,0.5,0.7,0.5,1.2
				c0,0.9-0.7,1.6-1.6,1.6c-0.4,0-0.8-0.2-1.1-0.4c-1.6-1.5-3.4-2.7-6.2-2.7c-4.6,0-8.1,3.9-8.1,8.7v0.1c0,4.9,3.6,8.8,8.3,8.8
				c2.6,0,4.6-1.2,6.3-2.8c0.2-0.2,0.5-0.4,1-0.4c0.8,0,1.5,0.7,1.5,1.5c0,0.4-0.2,0.8-0.4,1c-2.1,2.1-4.7,3.6-8.5,3.6
				C271.8,47,266.8,41.6,266.8,35.3z"/>
          <Svg.Path fill="#fff" d="M291,40.5V26.9h-1.8c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h1.8v-5.3c0-0.9,0.7-1.7,1.7-1.7
				c0.9,0,1.7,0.8,1.7,1.7v5.3h5.8c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5h-5.8V40c0,2.8,1.5,3.8,3.8,3.8
				c1.2,0,1.8-0.3,2.1-0.3c0.8,0,1.4,0.7,1.4,1.4c0,0.6-0.4,1.1-1,1.3c-1,0.4-2,0.6-3.3,0.6C293.8,46.9,291,45.1,291,40.5z"/>
        </Svg.G>
      </Svg>
    );
  }
}

