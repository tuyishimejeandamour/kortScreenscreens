import { StyleSheet } from "react-native";


export default StyleSheet.create(
    {
        container: {
            flex: 1,
            width: '100%',
            backgroundColor: '#f5f5f5',
        },
        header_container: {
            width: '100%',
            marginTop: 50,
            backgroundColor: '#f5f5f5'
        },
        header: {
            flexDirection: "row",
            justifyContent: 'space-between',
            padding: 10
        },
        product_list: {
         marginTop: 20,
         flex:1,
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
          height: 35,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          color: 'black',
          backgroundColor:"white",
          borderRadius: 10,
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
            backgroundColor: "#cce",
            shadowColor: "#475050",
            shadowOffset:{
                width: 0,
                height: 9,
            },
            shadowOpacity:0.22,
            shadowRadius: 9.22,
            elevation: 12
        },
        product_card_content:{
           width: 142,
           height: 142,
           justifyContent: 'space-between'
        },
        card_background_cover:{
            borderRadius:20,
            flex:1,
            width: 170,
            justifyContent:"center",
            alignItems: 'center'
        },
        product_header:{
            flexDirection:"row",
            justifyContent: 'flex-end'
        }
        ,
        addcart:{
            marginLeft: 10
        },
        product_name:{
            color: 'white'
        }
        ,
        product_discription:{
            flexDirection:"row"
        },
        product_rate:{
            flexDirection: "row",
            marginLeft: 10
        },
        sort_icon:{
            justifyContent:"center",
            alignContent: "center",
        }
    }
)