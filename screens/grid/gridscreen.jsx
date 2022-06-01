import { Dimensions, Text, ScrollView, View, TextInput } from 'react-native'
import React from 'react'
import styles from './gridscreen.styles'

const GreenScreen = () => {
  const { width } = Dimensions.get('window')
  const renderGrid = (porps) => {

    return (
      <ScrollView>
        <View style={styles.GridContainer}>
          {
            pros.data.map((prop, i) => {
              return <View key={i} style={{
                width: (100 / prop.columns) * prop.span + '%',
                height: props.rowHeight == undefined ? width / props.columns : props.rowHeight
              }}>
              </View>
            })
          }
        </View>
      </ScrollView>

    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text>hello</Text>
      </View>
      <View style={styles.search}>
        <Text style={styles.explorer}>Explore</Text>
        <TextInput style={styles.input} placeholder="search" />
      </View>
      <View>

      </View>

    </View>
  )
}

export default GreenScreen
