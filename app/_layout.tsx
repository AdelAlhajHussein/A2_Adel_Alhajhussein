import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "My App",
        headerStyle: {
          backgroundColor: "#007bff",     // top bar color
        },
        headerTitleStyle: {
          color: "white",                 // title color
        },
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginRight: 10,
            }}
          >
            <Link
              href="/Main"
              style={{
                backgroundColor: "white",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "#007bff", fontWeight: "600" }}>
                Main
              </Text>
            </Link>

            <Link
              href="/About"
              style={{
                backgroundColor: "white",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "#007bff", fontWeight: "600" }}>
                About
              </Text>
            </Link>
          </View>
        ),
      }}
    />
  );
}
