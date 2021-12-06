import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';

// Import all Components
import {purple, white} from '../utils/colors';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

// Import all Screens/Views
import DeckList from '../views/DeckList';
import NewDeck from '../views/NewDeck';
import Deck from '../views/Deck';
import QuizHome from '../views/QuizHome';
import AddCard from '../views/AddCard';
import Score from '../views/Score';

const Tab =
  Platform.OS === 'android'
    ? createMaterialTopTabNavigator()
    : createBottomTabNavigator();

const AppTabConfigs = {
  screenOptions: ({route}) => ({
    tabBarIcon: ({color}) => {
      let Icon;
      if (route.name === 'DeckList') {
        Icon = <AntDesign name="book" size={25} color={color} />;
      } else if (route.name === 'NewDeck') {
        Icon = <FontAwesome name="plus-square" size={25} color={color} />;
      }
      return Icon;
    },
    headerShown: false,
    tabBarActiveTintColor: Platform.OS === 'ios' ? purple : white,
    tabBarStyle: {
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      height: 70,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
    tabBarIndicatorStyle: {
      backgroundColor: 'yellow',
    },
  }),
};

const RouteConfigs = {
  DeckList: {
    name: 'DeckList',
    component: DeckList,
    options: {
      tabBarLabel: 'Decks',
    },
  },
  NewDeck: {
    name: 'NewDeck',
    component: NewDeck,
    options: {
      tabBarLabel: 'New Deck',
    },
  },
};

const AppHome = () => {
  return (
    <Tab.Navigator {...AppTabConfigs}>
      <Tab.Screen {...RouteConfigs.DeckList} />
      <Tab.Screen {...RouteConfigs.NewDeck} />
    </Tab.Navigator>
  );
};

const StackConfig = {
  screenOptions: {
    headerMode: 'screen',
  },
};

const StackScreenConfigs = {
  AppHome: {
    name: 'AppHome',
    component: AppHome,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: Constants.statusBarHeight + 10,
      },
      headerTitleStyle: {
        fontSize: 22,
        textAlign: 'center',
      },
      headerTitleAlign: 'center',
      title: 'Flashcards',
    },
  },
  Deck: {
    name: 'Deck',
    component: Deck,
    options: ({navigation, route}) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: Constants.statusBarHeight + 10,
      },
      headerTitleStyle: {
        fontSize: 22,
        textAlign: 'center',
      },
      title: 'Deck',
      headerBackTitle: 'Flashcards',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    }),
  },
  AddCard: {
    name: 'AddCard',
    component: AddCard,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: Constants.statusBarHeight + 10,
      },
      headerTitleStyle: {
        fontSize: 22,
        textAlign: 'center',
      },
      headerTitleAlign: 'center',
      title: 'Add Card',
    },
  },
  NewDeck: {
    name: 'NewDeck',
    component: NewDeck,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: Constants.statusBarHeight + 10,
      },
      headerTitleStyle: {
        fontSize: 22,
        textAlign: 'center',
      },
      title: 'New Deck',
    },
  },
  QuizHome: {
    name: 'QuizHome',
    component: QuizHome,
    options: {
      headerTintColor: white,

      headerStyle: {
        backgroundColor: purple,
        height: Constants.statusBarHeight + 10,
      },
      headerTitleStyle: {
        fontSize: 22,
        textAlign: 'center',
      },
      headerTitleAlign: 'center',
      title: 'Quiz',
    },
  },
  Score: {
    name: 'Score',
    component: Score,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: Constants.statusBarHeight + 10,
      },
      headerTitleStyle: {
        fontSize: 22,
        textAlign: 'center',
      },
      headerTitleAlign: 'center',
      title: 'Score',
    },
  },
};

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator {...StackConfig}>
    <Stack.Screen {...StackScreenConfigs.AppHome} />
    <Stack.Screen {...StackScreenConfigs.Deck} />
    <Stack.Screen {...StackScreenConfigs.AddCard} />
    <Stack.Screen {...StackScreenConfigs.NewDeck} />
    <Stack.Screen {...StackScreenConfigs.QuizHome} />
    <Stack.Screen {...StackScreenConfigs.Score} />
  </Stack.Navigator>
);

export default AppNavigation;
