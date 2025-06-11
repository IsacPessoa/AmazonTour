import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "stretch",
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    overflow: "hidden",
  },
  imageText: {
    color: "#999",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
