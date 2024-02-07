import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamsList } from '../../types'
import MoviesPage from '../pages/Movies/MoviesPage/MoviesPage';
import ProfilePage from '../pages/Profile/ProfilePage/ProfilePage';
import SearchPage from '../pages/Search/SearchPage/SearchPage';
import SeriesPage from '../pages/Series/SeriesPage/SeriesPage';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator<RootStackParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarItemStyle:{paddingBottom:5, height:50,} ,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Movies') {
          iconName = 'theaters'; // Burada kullanılacak ikon adı
        } else if (route.name === 'Series') {
          iconName = 'tv'; // Burada kullanılacak ikon adı
        } else if (route.name === 'Search') {
          iconName = 'search'; // Burada kullanılacak ikon adı
        } else if (route.name === 'Profile') {
          iconName = 'person'; // Burada kullanılacak ikon adı
        }

        return iconName ? <Icon name={iconName} size={30} color={color} /> : null
      }

    })}
    
    >
      <Tab.Screen name='Movies' component={MoviesPage} />
      <Tab.Screen name='Series' component={SeriesPage} />
      <Tab.Screen name='Search' component={SearchPage} />
      <Tab.Screen name='Profile' component={ProfilePage} />
    </Tab.Navigator>
  )
}

export default TabNavigator