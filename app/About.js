import { Text, View } from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#eef2f3",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 25,
          borderRadius: 15,
          width: "90%",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 3 },
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 15,
            color: "#333",
          }}
        >
          About This App
        </Text>

        <Text style={{ fontSize: 20, marginBottom: 10, textAlign: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Name:</Text> Adel Alhajhussein
        </Text>

        <Text style={{ fontSize: 20, marginBottom: 20, textAlign: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Student ID:</Text> 101532466
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            textAlign: "center",
            color: "#555",
          }}
        >
          This application is a currency converter built with React Native and
          Expo. It allows users to enter a base currency, target currency, and
          amount. The app validates input, calls a live exchange rate API, and
          displays the converted results in a clean and user-friendly
          interface.
        </Text>
      </View>
    </View>
  );
}
