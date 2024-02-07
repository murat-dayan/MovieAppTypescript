import { StyleSheet } from "react-native";
import { white } from "../../styles/colors";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:5,
        backgroundColor:white,
        padding:10,
        borderRadius:10
    },
    text:{
        fontSize:17,
        color:'black',
        fontWeight:'400'
    }
})