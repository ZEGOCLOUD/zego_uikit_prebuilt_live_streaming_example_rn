import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import AppNavigation from './AppNavigation';
import {
  ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

export default function App() {
  return (<NavigationContainer >
    <AppNavigation />
    <ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView />
  </NavigationContainer>);
}
