import { StyleSheet } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia'

const TrapezoidBackground = () => {
  return (
    <Canvas style={{ width: 266, height: 100 }}>
        <Path
          path="M112 0H154C186 0 195.501 24.1398 205.732 48.6985C216.325 74.1247 227 100 262 100H4.00006C39.0001 100 49.6754 74.1247 60.2678 48.6985C70.4989 24.1398 80.0001 0 112 0Z"
          style="fill"
        >
            <LinearGradient
                start={vec(183, 100)}
                end={vec(183, 0)}
                colors={["#262C51", "#3E3F74"]}
            />
        </Path>
        <Path 
        style={"stroke"}
        strokeWidth={0.5}
        color={"rgba(117,130,244,0.5)"}
        path="M112 0.25H154C169.923 0.25 180.229 6.24992 187.838 15.3008C195.462 24.37 200.382 36.5041 205.502 48.7949C210.794 61.4986 216.125 74.3646 224.524 84.0479C231.574 92.1753 240.781 98.0562 253.919 99.75H12.0811C25.2187 98.0562 34.4259 92.1753 41.4756 84.0479C49.8749 74.3646 55.2058 61.4986 60.4981 48.7949C65.6184 36.5041 70.5379 24.37 78.1622 15.3008C85.771 6.24992 96.0772 0.25 112 0.25Z"
        />
    </Canvas>
  )
}

export default TrapezoidBackground

const styles = StyleSheet.create({})

