import { Text, TextInput, View } from "react-native";

export default function LabeledInput({ label, value, onChangeText, keyboardType = "default" }) {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text style={{ marginBottom: 6 }}>{label}</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
          borderColor: "#ccc",
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
}
