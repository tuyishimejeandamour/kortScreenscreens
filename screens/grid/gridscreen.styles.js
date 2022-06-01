import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container:{
            width: '100%',
            flex: 1,
            backgroundColor: 'white'
           
        },
        header:{
            width: '100%',
            marginTop: 60 ,
            height: 50,
            backgroundColor: 'yellow'
            
        },
        search:{
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 20,
            justifyContent:"space-between",
            alignItems: "center"
        },
        explorer:{
        fontSize: 18,
        fontWeight: "bold"
        },
        input: {
            height: 35,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 8,
            backgroundColor: '#c5ccd6',
            color: 'black',
            backgroundColor:"white",
            borderRadius: 4,
            width: 140,
            marginRight: 20
          },
    }
)