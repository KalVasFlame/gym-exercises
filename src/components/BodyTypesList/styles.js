const styles = {
    list: {
        display: {
            xs: "block",
            sm: "flex",
        },
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    listItem: {
        width: {
            xs: "100%",
            sm: "40%",
            md: "31%",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "20px 30px",
        border: "1px solid red",
        borderRadius: "5px",
        margin: "20px 10px",
        cursor: "pointer",
    },
    listItemText: {
        color: "#000",
        fontSize: {
            lg: "34px",
        },
        fontWeight: "bold",
        margin: "0 auto",
    },
};

export default styles;