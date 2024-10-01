import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.starContainer}>
      {Array.from({ length: 5 }).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <Text style={styles.star}>{index < rating ? '★' : '☆'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  star: {
    fontSize: 30,
    color: '#ffd700',
    marginHorizontal: 5,
  },
});

export default StarRating;
