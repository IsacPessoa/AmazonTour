import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
    padding: 20,
    justifyContent: "center",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    color: colors.darkGreen,
    textAlign: "center",
  },

  card: {
    backgroundColor: colors.mentaGreen,
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  infoRow: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.softGreen,
    paddingBottom: 8,
    width: "100%",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.forestGreen,
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.softBlack,
    backgroundColor: colors.offWhite,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    width: "100%",
  },

  message: {
    textAlign: "center",
    color: colors.gray,
    fontSize: 16,
  },

  button: {
    backgroundColor: colors.forestGreen,
    width: "50%",
    borderRadius: 8,
    paddingVertical: 14,
    alignSelf: "center",
    shadowColor: colors.softBlack,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.softGreen,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  avatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.darkGreen,
  },

  secondaryButton: {
    backgroundColor: colors.red,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "60%",
    alignSelf: "center",
    marginBottom: 12,
  },

  secondaryButtonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  favoriteButton: {
    backgroundColor: colors.softGreen,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "60%",
    alignSelf: "center",
    marginBottom: 34,
  },

  favoriteButtonText: {
    color: colors.softBlack,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  deleteButton: {
    backgroundColor: colors.red,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "60%",
    alignSelf: "center",
    marginTop: 10,
  },

  deleteButtonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
