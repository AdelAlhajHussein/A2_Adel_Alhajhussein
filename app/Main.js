import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function Main() {
  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("1");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);



  const validateInputs = () => {
    if (baseCurrency.length !== 3 || targetCurrency.length !== 3) {
      return "Currency codes must be 3-letter uppercase ISO codes.";
    }

    if (!/^[A-Z]{3}$/.test(baseCurrency) || !/^[A-Z]{3}$/.test(targetCurrency)) {
      return "Currency codes must be uppercase letters only.";
    }

    const numericAmount = Number(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return "Amount must be a positive number.";
    }

    return ""; // No errors
  };

  const handleConvert = async () => {
  const validationError = validateInputs();
  if (validationError) {
    setError(validationError);
    return;
  }

  setError("");
  setLoading(true);

  try {
    const apiKey = "fca_live_LdqW1HKv1ClmMB5mPpE45ToUEWyHbcA8YceDY3EJ";
    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${baseCurrency}&currencies=${targetCurrency}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network error: Failed to reach the API.");
    }

    const data = await response.json();

    if (!data.data || !data.data[targetCurrency]) {
      throw new Error("Invalid currency code or missing data from API.");
    }

    const rate = data.data[targetCurrency];
    if (!rate) {
  setError(
    "The selected currency is not supported by the FreeCurrencyAPI free plan. Please try a major currency like CAD, USD, EUR, GBP, etc."
  );
  setLoading(false);
  return;
  }
    const converted = Number(amount) * rate;
    setLoading(false);

    setConvertedAmount(converted.toFixed(2));
    setExchangeRate(rate);

  } catch (err) {
    setError(err.message);
  }
  setLoading(false);
};


  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Currency Converter
      </Text>

      {error ? (
        <Text style={{ color: "red", marginBottom: 20 }}>{error}</Text>
      ) : null}

      <Text>Base Currency (e.g., CAD):</Text>
      <TextInput
        value={baseCurrency}
        onChangeText={setBaseCurrency}
        style={{
        borderWidth: 1,
        padding: 12,
        marginBottom: 16,
        borderRadius: 8,
        borderColor: "#ccc",
        backgroundColor: "#fff",
      }}
      />

      <Text>Target Currency (e.g., USD):</Text>
      <TextInput
        value={targetCurrency}
        onChangeText={setTargetCurrency}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <Text>Amount:</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <TouchableOpacity
  onPress={handleConvert}
  disabled={loading}
  style={{
    backgroundColor: loading ? "#aaa" : "#007bff",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  }}
>
  <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
    {loading ? "Converting..." : "Convert"}
  </Text>
</TouchableOpacity>


      {loading && <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />}

      {convertedAmount && (
    <View style={{ marginTop: 30 }}>
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
      Converted Amount: {convertedAmount}
    </Text>
    <Text style={{ fontSize: 16, marginTop: 10 }}>
      Exchange Rate: {exchangeRate}
    </Text>
    </View>
    )}


    </View>
  );
}
