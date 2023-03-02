import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
import axios from 'axios';
import Event from '../event/event';
import logo from '../../assets/stepfreegigs-logo.png';
const baseURL = 'http://localhost:3000';

export default function SearchScreen() {
  const [events, setEvents] = useState(null);
  const onPress = async () => {
    const eventsData = await axios.get(`${baseURL}/events`);
    setEvents(eventsData);
  };

  return (
    <View testID='SearchScreen'>
      <Button
        onPress={onPress}
        title='Find events near me!'
        testID='search-button'
      />
      {events &&
        events.map((data, index) => (
          <Event eventData={data} key={index} testID='Event' />
        ))}
      {!events && (
        <>
          <Text>StepFreeGigs</Text>
          <Image testID='logo' source={logo} />
        </>
      )}
    </View>
  );
}