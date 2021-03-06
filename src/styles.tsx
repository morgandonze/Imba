import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "white", flex: 1 },
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginTop: 40,
  },
  h1: {
    color: "#333",
    fontSize: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
  },
  defaultText: {
    color: "#444",
    fontWeight: "600",
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ffab00",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  endeavor: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  input: { height: 50, margin: 5, backgroundColor: "#ddd" },
});

export default styles;
