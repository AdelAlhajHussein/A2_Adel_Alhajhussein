import { Text, View } from "react-native";

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

      <View
        style={{
          width: "90%",
          padding: 20,
          borderWidth: 2,
          borderColor: "#007bff",
          borderRadius: 12,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5, // Android shadow
        }}
      >
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
      </View>

    </View>
  );
}
