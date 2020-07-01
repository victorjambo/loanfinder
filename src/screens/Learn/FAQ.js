import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import Accordian from '../../Components/Accordian';

const menu = [
  {
    id: 1,
    title: 'Non Veg Biryanis',
    data:
      'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
  },
  {
    id: 2,
    title: 'Pizzas',
    data:
      'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.',
  },
  {
    id: 3,
    title: 'Drinks',
    data:
      'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.',
  },
  {
    id: 4,
    title: 'Deserts',
    data:
      'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire',
  },
  {
    id: 5,
    title: 'Non Veg Biryanis',
    data:
      'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
  },
];

const FAQ = () => {
  return (
    <ScrollView style={styles.container}>
      {menu.map(item => (
        <Accordian key={item.id} title={item.title} data={item.data} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
});

export default FAQ;
