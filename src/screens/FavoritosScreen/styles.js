import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    resizeMode: "cover",
  },
  favoritoButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 6,
  },
  clearButton: {
    backgroundColor: colors.red || "#ff4d4d",
    padding: 14,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
