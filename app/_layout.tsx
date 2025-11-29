import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "My App",
        headerRight: () => (
          <View style={{ flexDirection: "row", gap: 20, marginRight: 10 }}>
            <Link href="/Main">
              <Text style={{ fontSize: 16, color: "blue" }}>Main</Text>
            </Link>
            <Link href="/About">
              <Text style={{ fontSize: 16, color: "blue" }}>About</Text>
            </Link>
          </View>
        ),
      }}
    />
  );
}
