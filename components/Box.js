import { View } from "react-native";

export default function Box({ children }) {
  return (
    <View
      style={{
        width: "90%",
        padding: 20,
        borderWidth: 2,
        borderColor: "#007bff",
        borderRadius: 12,
        backgroundColor: "#e6e6e6",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      {children}
    </View>
  );
}
