import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GreenScreen from './screens/grid/gridscreen';

const data = [
  { id: '1', caption: 'image', span: 3, image: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg' },
  { id: '2', caption: 'image1', span: 1, image: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg' },
  { id: '3', caption: 'image2', span: 2, image: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg' },
  { id: '4', caption: 'image3', span: 3, image: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg' },
  { id: '4', caption: 'image3', span: 2, image: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg' },
  { id: '4', caption: 'image3', span: 1, image: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg' },
]
export default function App() {
  return (
    <View style={styles.container}>
      <GreenScreen data={data} columns={3} rowHeight={150} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
