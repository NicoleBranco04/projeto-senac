import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    caixa01:{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor:"white"
    },
    caixa02:{
        backgroundColor:"#006494",
        padding: 10,
        position: "absolute",
        bottom: 0,
         width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icons:{
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    aifb:{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",  
        backgroundColor:"#f8da45",
    },
    txtaifb:{
        fontSize: 17, 
        color: "#006494",
        textAlign:"left",
        fontWeight:"bold",
        marginTop:50,
        margin:9
    },
    caixa03:{
        flex:1,
        justifyContent:"center"
    },
    imagem:{
        width: 350,
        height: 125,
    },
    txttitulo:{
        fontSize: 25, 
        color: "#006494",
        fontWeight:"bold",
        top:0

    },
    caixa04:{
        flex:1,
        top:0,
       
    },
    caixa05:{
        flexDirection:"column"
    },
    caixa06:{
        flex:1,
        flexDirection:"row",
        top:0,

    },
    imaginfor:{
        width:135,
        height:100,
        marginTop:18,
        borderRadius:10
    }



});