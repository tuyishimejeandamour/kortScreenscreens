import { StyleSheet } from "react-native";


export default StyleSheet.create(
    {
        container: {
            flex: 1,
            width: '100%',
            backgroundColor: '#fff',
        },
        header_container: {
            width: '100%',
            marginTop: 50,
            backgroundColor: '#fff'
        },
        header: {
            flexDirection: "row",
            justifyContent: 'space-between',
            padding: 10
        },
        product_list: {
         marginTop: 20,
         marginLeft: 20,
         justifyContent:"center"
        },
        right_header: {
            flexDirection: "row"
        },
        user_image: {
            marginLeft: 10,
            borderRadius: 30
        },
        input: {
          height: 30,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          color: 'black',
          borderRadius: 8,
          flex: 1,
          marginRight: 20
        },
        search_container: {
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 20
            
        },
        sort:{
            width: 55,
            padding: 5,
            borderRadius: 4,
            flexDirection: "row",
            backgroundColor: "#dde"

        }
        ,
        sortText:{
            fontSize: 11,

        },
        sort_container:{
            marginTop: 10,
            width: "100%",
            flexDirection: "row",
            paddingRight: 20,
            justifyContent: "flex-end"
        },
        product_card:{
            width: 170,
            overflow:"hidden",
            borderWidth: 1,
            borderColor: '#fff',
            marginRight:10,
            height: 170,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: "#cce"
        },
        product_card_content:{
           width: 142,
           height: 142,
           backgroundColor: '#fff'
        },
        card_background_cover:{
            borderRadius:20,
            flex:1,
            width: 170,
            justifyContent:"center",
            alignItems: 'center'
        }
    }
)