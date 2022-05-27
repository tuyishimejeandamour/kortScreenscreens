import { View, Text, Pressable, Image, TextInput, FlatList,ImageBackground, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './productList.styles'
import { Feather } from '@expo/vector-icons'


const ProductList = () => {
  const items = [
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume1',
      price: '$ 34.00',
      rate: 3
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume2',
      price: '$ 35.00',
      rate: 4
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume3',
      price: '$ 44.00',
      rate: 5
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume5',
      price: '$ 54.00',
      rate: 5
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header}>
          <Feather name='menu' size={24} color="black" />
          <View style={styles.right_header}>
            <Feather name='shopping-cart' size={22} color="black" />
            <Pressable >
              <Image style={styles.user_image} source={{
                width: 24,
                height: 24,
                uri: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg'
              }} />
            </Pressable>
          </View>
        </View>
        <View style={styles.sorting_container}>
          <View style={styles.search_container}>
            <TextInput style={styles.input} placeholder="search product" />
            <Pressable>
              <Feather name='filter' size={24} color="black" />
            </Pressable>
          </View>
          <View style={styles.sort_container}>
            <Pressable style={styles.sort}>
              <Text style={styles.sortText}>sortBy</Text>
              <Feather name='arrow-down' size={14} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.product_list}>
        <FlatList
        numColumns={2}
          data={items}
          renderItem={({ item, index, separator }) => (
            <TouchableHighlight
              key={index}
              style={styles.product_card}
            >
              <ImageBackground resizeMode='stretch' style={styles.card_background_cover} source={{
                uri:item.imageurl
              }}>
              <View style={styles.product_card_content}>
                <Text>{item.name}</Text>
              </View>
              </ImageBackground>
            </TouchableHighlight>
          )}

        >
        </FlatList>
      </View>

    </View>
  )
}

export default ProductList