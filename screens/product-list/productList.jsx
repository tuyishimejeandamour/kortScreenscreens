import { View, Text, Pressable, Image, TextInput, FlatList, ImageBackground, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './productList.styles'
import { Feather,FontAwesome } from '@expo/vector-icons'


const ProductList = () => {
  const items = [
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume1',
      price: '$ 34.00',
      rate: 3
    },
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume2',
      price: '$ 35.00',
      rate: 4
    },
    {
      imageurl: "https://corporate.static-swaven.com/wp-content/uploads/2020/04/Luxury-perfume1-e1587657546523.jpg",
      name: 'Perfume3',
      price: '$ 44.00',
      rate: 5
    },
    {
      imageurl: "https://corporate.static-swaven.com/wp-content/uploads/2020/04/Luxury-perfume1-e1587657546523.jpg",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
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
            <Pressable style={styles.sort_icon}>
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
        style={{flex:1}}
          numColumns={2}
          data={items}
          renderItem={({ item, index, separator }) => (
            <TouchableHighlight
              key={index}
              style={styles.product_card}
            >
              <ImageBackground resizeMode='stretch' style={styles.card_background_cover} source={{
                uri: item.imageurl
              }}>
                <View style={styles.product_card_content}>
                  <View style={styles.product_header}>
                    <Feather name='heart' size={16} color="white" />
                    <Feather name='plus-circle' style={styles.addcart} size={16} color="white" />
                  </View>
                  <View>
                    <Text style={styles.product_name}>{item.name}</Text>
                    <View style={styles.product_discription}>
                      <Text style={styles.product_name}>{item.price}</Text>
                      <View style={styles.product_rate}>
                        {
                          [...Array(5).keys()].map((num, i) => {
                            if (i < item.rate) {
                              return <FontAwesome name={"star"} size={14} color={"yellow"} />
                            }
                            else {
                              return <FontAwesome name={"star-o"} size={14} color={"white"} />
                            }
                          })
                        }
                      </View>
                    </View>
                  </View>
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