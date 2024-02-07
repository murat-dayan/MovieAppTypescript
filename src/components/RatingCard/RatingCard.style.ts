import { StyleSheet } from "react-native";
import { mainBlue, white } from "../../styles/colors";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        width:70,
        backgroundColor: mainBlue,
        
        height:30,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:5,
        alignSelf:'auto'
    },
    rating_text:{
        color:white,        
    }
})