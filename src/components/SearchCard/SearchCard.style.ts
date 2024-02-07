import { StyleSheet } from "react-native";
import { white } from "../../styles/colors";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:white,
        paddingHorizontal:5,
        borderRadius:10
    },
    search_text_input:{
        flex:1,
        marginHorizontal:5
    }
})