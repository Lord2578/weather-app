import "react-native-reanimated";
import HomeBackground from "./components/HomeBackground";
import { StatusBar } from "react-native";
import WeatherTabBar from "./components/tabbar/WeatherTabBar";
import WeatherInfo from "./components/section/WeatherInfo";
import { currentWeather } from "./data/CurrentWeather";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "SF-Thin": require("./assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <WeatherTabBar />
      <StatusBar barStyle="light-content" />
    </SafeAreaProvider>
  );
}
