import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { MealStatistics } from '@screens/MealStatistics';
import { NewMeal } from '@screens/NewMeal';
import { StatusCreateMeal } from '@screens/StatusCreateMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="statusCreateMeal" component={StatusCreateMeal} />
      <Screen name="home" component={Home} />
      <Screen name="mealStatistics" component={MealStatistics} />
      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  )
}