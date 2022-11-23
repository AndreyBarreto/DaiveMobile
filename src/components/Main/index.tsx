import { Container } from "./styles";
import {
  CategoriesContainer,
  Footer,
  MenuContainer,
  FooterContainer,
} from "../Main/styles";
import { Header } from "../Header";
import { Categories } from "../Categories";
import { Menu } from "../Menu";
import { Button } from "../Button";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "../Text";
import { View } from "react-native";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Main2() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
    </>
  );
}
const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Main2} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
