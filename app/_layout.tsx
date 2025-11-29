import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack, usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  const pathname = usePathname(); // detect active route

  return (
    <Stack
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={["#007bff", "#0056b3"]}
            style={{ flex: 1 }}
          />
        ),
        headerTitle: "Currency App",
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
          fontSize: 20,
        },
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 10,
              backgroundColor: "rgba(255,255,255,0.2)",
              paddingVertical: 4,
              paddingHorizontal: 6,
              borderRadius: 20,
            }}
          >
            {/* MAIN NAV BUTTON */}
            <Link
              href="/Main"
              style={{
                backgroundColor:
                  pathname === "/Main" ? "white" : "transparent",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 20,
                marginRight: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="home"
                size={16}
                color={pathname === "/Main" ? "#007bff" : "white"}
                style={{ marginRight: 4 }}
              />
              <Text
                style={{
                  color: pathname === "/Main" ? "#007bff" : "white",
                  fontWeight: "600",
                }}
              >
                Main
              </Text>
            </Link>

            {/* ABOUT NAV BUTTON */}
            <Link
              href="/About"
              style={{
                backgroundColor:
                  pathname === "/About" ? "white" : "transparent",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="info"
                size={16}
                color={pathname === "/About" ? "#007bff" : "white"}
                style={{ marginRight: 4 }}
              />
              <Text
                style={{
                  color: pathname === "/About" ? "#007bff" : "white",
                  fontWeight: "600",
                }}
              >
                About
              </Text>
            </Link>
          </View>
        ),
      }}
    />
  );
}
