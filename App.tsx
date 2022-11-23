import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Main } from "./src/components/Main";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Raleway-400": require("./src/assets/fonts/Raleway-Regular.ttf"),
    "Raleway-600": require("./src/assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-700": require("./src/assets/fonts/Raleway-Bold.ttf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <Main />
    </>
  );
}
