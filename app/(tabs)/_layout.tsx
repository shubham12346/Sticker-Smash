import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home"} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          headerTitle: "About",
        }}
      />
      <Tabs.Screen
        name="+ not-found"
        options={{
          headerTitle: "Opp's Not found",
        }}
      />
    </Tabs>
  );
}
