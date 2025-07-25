import {
  ImageBackground,
  StyleSheet,
  Image,
  ScaledSize,
  View,
} from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import useApplicationDimensions from "../hooks/useApplicationDimensions";

const HomeBackground = () => {
  const dimension = useApplicationDimensions();
  const { width, height } = dimension;
  const myStyles = styles(dimension);
  const smokeHeight = height * 0.6;
  const smokerOffsetY = height * 0.4;
  return (
    <View style={{...StyleSheet.absoluteFillObject}}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </Canvas>

      <ImageBackground
        source={require("../assets/images/Background.png")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <Canvas
          style={{
            height: smokeHeight,
            ...StyleSheet.absoluteFillObject,
            top: smokerOffsetY,
          }}
        >
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58,63,86,0)", "rgba(58,63,86,1)"]}
              positions={[-0.02, 1]}
            />
          </Rect>
          {/* <Line
            p1={vec(width/2, 0)}
            p2={vec(width/2, smokeHeight)}
            strokeWidth={10}
            color="red"
            /> */}
        </Canvas>
        <Image
          source={require("../assets/images/House.png")}
          resizeMode="cover"
          style={myStyles.houseImage}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeBackground;

const styles = ({ width }: ScaledSize) =>
  StyleSheet.create({
    houseImage: {
      height: width,
      width: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
