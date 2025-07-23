import "react-native-reanimated";
import HomeBackground from "./components/HomeBackground";
import { StatusBar } from "react-native";
import WeatherTabBar from "./components/tabbar/WeatherTabBar";

export default function App() {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar barStyle="light-content" />
    </>
  );
}
