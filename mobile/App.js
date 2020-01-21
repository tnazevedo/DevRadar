import React from 'react';
import {StatusBar,Yellowbox} from 'react-native';
import Routes from './src/routes';

Yellowbox.ignoreWarnings([
  'Unrecognized Websocket'
])
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
      <Routes/>
    </>
  );
}

