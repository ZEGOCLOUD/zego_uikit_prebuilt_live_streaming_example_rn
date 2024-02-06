import React, { useEffect } from 'react';
import { Alert } from 'react-native';

import { StyleSheet, View, Text, Button } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  AUDIENCE_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import * as ZIM from 'zego-zim-react-native';
import KeyCenter from "./KeyCenter";

export default function AudiencePage(props) {
  const { route } = props;
  const { params } = route;
  const { userID, userName, liveID } = params;

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={KeyCenter.appID}
        appSign={KeyCenter.appSign}
        userID={userID}
        userName={userName}
        liveID={liveID}
        config={{
          ...AUDIENCE_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            props.navigation.navigate('HomePage');
          },
          topMenuBarConfig: {
            buttons: [ZegoMenuBarButtonName.minimizingButton, ZegoMenuBarButtonName.leaveButton],
          },
          onWindowMinimized: () => {
            console.log('[Demo]AudiencePage onWindowMinimized');
            props.navigation.navigate('HomePage');
          },
          onWindowMaximized: () => {
              console.log('[Demo]AudiencePage onWindowMaximized');
              props.navigation.navigate('AudiencePage', {
                userID: userID,
                userName: userName,
                liveID: liveID,
              });
          }
        }}
        plugins={[ZIM]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  avView: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
  },
  ctrlBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 50,
    width: '100%',
    height: 50,
    zIndex: 2,
  },
  ctrlBtn: {
    flex: 1,
    width: 48,
    height: 48,
    marginLeft: 37 / 2,
    position: 'absolute',
  },
});
