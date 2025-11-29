import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to My App</Text>

      <Link href="/Main">
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Go to Main Screen
        </Text>
      </Link>

      <Link href="/About">
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Go to About Screen
        </Text>
      </Link>
    </View>
  );
}
