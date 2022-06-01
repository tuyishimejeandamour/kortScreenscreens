import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            width: '100%',
            flex: 1,
            backgroundColor: 'white'

        },
        header: {
            width: '100%',
            marginTop: 60,
            height: 40,
            paddingLeft: 10,
      
        },
        search: {
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
        },
        explorer: {
            fontSize: 18,
            fontWeight: "bold"
        },
        search_input:{
            backgroundColor: '#8E8E8309',
            flexDirection: 'row',
            borderRadius:6,
            width: 140,
            height: 35,
            alignItems: "center",
            paddingRight: 6

        },
        input: {
            height: 35,
            borderWidth: 0,
            padding: 8,
            flex:1,
            color: 'black',
            borderRadius: 4,
            marginRight: 20
        },
        GridContainer: {
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding:10,
        },
        content:{
            width: '100%',
            flex:1,
        },
        image:{
            margin: 4,
            borderRadius: 8,
            flex: 1,
            shadowColor: "#475050",
            shadowOffset:{
                width: 0,
                height: 9,
            },
            shadowOpacity:0.22,
            shadowRadius: 9.22,
            elevation: 12,
            alignItems: 'center',
            justifyContent: 'center'
          },
          button:{
              width: 140,
              height: 40,
              backgroundColor: '#2BDA8E',
              borderRadius:4,
              justifyContent:"center",
              alignItems:"center",
              shadowColor: "#475050",
              shadowOffset:{
                  width: 0,
                  height: 9,
              },
              shadowOpacity:0.22,
              shadowRadius: 9.22,
              elevation: 12,
              position:"absolute",
              bottom: 10,
              left: '35%',
              
          },
          button_text:{
              color: 'white'
          }

    }
)