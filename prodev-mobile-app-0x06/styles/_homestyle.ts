// styles/_homestyle.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    searchGroup: {
        padding: 16,
        backgroundColor: "white",
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    searchControlGroup: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    searchFormText: {
        fontSize: 16,
        fontWeight: "500",
        marginRight: 10,
    },
    searchControl: {
        flex: 1,
        fontSize: 14,
    },
    searchButton: {
        backgroundColor: "#34967C",
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 10,
    },
    filterContainer: {
        alignItems: "center",
        marginRight: 16,
    },
    listingContainer: {
        flex: 1,
        padding: 16,
    },
    paginationContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    showMoreButton: {
        backgroundColor: "#34967C",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    showMoreButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
});

export { styles };