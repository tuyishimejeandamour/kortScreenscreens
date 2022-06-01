import { Dimensions, Text, ScrollView, Pressable, Image, View, TextInput } from 'react-native'
import React from 'react'
import styles from './gridscreen.styles'
import { Feather,FontAwesome} from '@expo/vector-icons'



const GreenScreen = (props) => {
  const { width } = Dimensions.get('window')

  const handleFilterPress = ()=>{
    //handle action when the filter button clicked
  }
  const handleImageClick = ()=>{
    //handle when the image is clicked
  }

  const renderGrid = (props) => {

    return (
      <ScrollView>
        <Pressable onPress={handleImageClick} style={styles.GridContainer}>
          {
            props.data.map((prop, i) => {
              return <View key={i} style={{
                width: (100 / props.columns) * prop.span + '%',
                height:prop.span == 3 ? 250:props.rowHeight == undefined ? width / props.columns : props.rowHeight,
                borderRadius: 8,
              }}>
                <Image style={styles.image} source={{
                  uri: prop.image
                }}>
                </Image>
              </View>
            })
          }
        </Pressable>
      </ScrollView>

    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <FontAwesome name={'long-arrow-left'} size={24} color='#dde' />
      </View>
      <View style={styles.search}>
        <Text style={styles.explorer}>Explore</Text>
        <View style={styles.search_input}>
        <TextInput style={styles.input} placeholder="search" />
        <Feather name='search' size={24} color={'#dde'} />
        </View>
      </View>
      <View style={styles.content}>
        {renderGrid(props)}
      </View>
      <Pressable onPress={handleFilterPress}  style={styles.button} title='filter'>
        <Text style={styles.button_text}>Filter</Text>
      </Pressable>
    </View>
  )
}

export default GreenScreen
