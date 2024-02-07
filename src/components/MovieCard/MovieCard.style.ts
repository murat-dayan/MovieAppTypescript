import { StyleSheet } from "react-native";
import { white } from "../../styles/colors";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        height:130,
        backgroundColor:white,
        borderRadius:10,
        marginHorizontal:5
    },
    image:{
        width:80,
        height:'100%',
        resizeMode:'cover',
        borderRadius:10
        
    },
    body_container:{
        flex:1,
        justifyContent: 'space-between',
        margin:10
        
    },
    movie_name_text:{
        color:'black',
        fontSize:17,
        fontWeight:'bold'
    },
    info_container:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})