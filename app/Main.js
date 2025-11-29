import { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function Main() {
  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("1");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  // -------------------------------
  // Input validation
  // -------------------------------
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

    return "";
  };

  // -------------------------------
  // Convert Handler
  // -------------------------------
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

      // If the currency is not included in free API:
      if (!data.data || data.data[targetCurrency] === undefined) {
        setError(
          `The currency "${targetCurrency}" is NOT supported in the FreeCurrencyAPI free plan. Please try CAD, USD, EUR, GBP, AUD, etc.`
        );
        setLoading(false);
        return;
      }

      const rate = data.data[targetCurrency];
      const converted = Number(amount) * rate;

      setConvertedAmount(converted.toFixed(2));
      setExchangeRate(rate);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <View
    style={{
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",   // <-- Centers horizontally
    }}
>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Currency Converter
      </Text>

      {error ? (
        <Text style={{ color: "red", marginBottom: 20, fontSize: 16 }}>
          {error}
        </Text>
      ) : null}

      {/* Base Currency */}
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
          backgroundColor: "#fff"
        }}
      />

      {/* Target Currency */}
      <Text>Target Currency (e.g., USD):</Text>
      <TextInput
        value={targetCurrency}
        onChangeText={setTargetCurrency}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 16,
          borderRadius: 8,
          borderColor: "#ccc",
          backgroundColor: "#fff"
        }}
      />

      {/* Amount */}
      <Text>Amount:</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 16,
          borderRadius: 8,
          borderColor: "#ccc",
          backgroundColor: "#fff"
        }}
      />

      {/* Convert Button */}
      <TouchableOpacity
        onPress={handleConvert}
        disabled={loading}
        style={{
          backgroundColor: loading ? "#888" : "#007bff",
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: 10
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
          {loading ? "Converting..." : "Convert"}
        </Text>
      </TouchableOpacity>

      {/* Loading Spinner */}
      {loading && (
        <ActivityIndicator
          size="large"
          color="blue"
          style={{ marginTop: 20 }}
        />
      )}

      {/* Results */}
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
