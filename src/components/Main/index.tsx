import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Championships } from "../../screens/Championships";
import { Profile } from "../../screens/Profile";
import { Container } from "./styles";
import { Introduction } from "../../screens/Introduction";

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Container>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: any;
              switch (route.name) {
                case "Campeonatos":
                  iconName = "home";
                  break;
                case "Procurar":
                  iconName = "search";
                  break;
                case "Criar":
                  iconName = "add-circle";
                  break;
                case "Perfil":
                  iconName = "person";
                  break;
                case "Introdução":
                  iconName = "albums";
                  break;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#234992",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Campeonatos" component={Championships} />
          <Tab.Screen name="Procurar" component={Championships} />
          <Tab.Screen name="Criar" component={Championships} />
          <Tab.Screen name="Introdução" component={Introduction} />
          <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
}
