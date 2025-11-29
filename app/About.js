import { Text, View } from "react-native";
import Box from "../components/Box.js";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          About This App
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Name:</Text> Adel Alhajhussein
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Student ID:</Text> 101532466
        </Text>

        <Text style={{ fontSize: 16, lineHeight: 22 }}>
          This application converts currencies using the FreeCurrencyAPI.  
          It allows users to enter a base currency, target currency, and amount,  
          then performs real-time conversion.
        </Text>
      </Box>
    </View>
  );
}
