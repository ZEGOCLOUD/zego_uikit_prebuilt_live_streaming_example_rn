import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as ZIM from 'zego-zim-react-native';

import {
  ZegoAudioVideoResourceMode,
  ZegoUIKitVideoConfig,
} from '@zegocloud/zego-uikit-rn';
import ZegoUIKitPrebuiltLiveStreaming, {
  AUDIENCE_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

import { CustomBuilder } from './CustomBuilder';
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
          onLeaveLiveStreaming: (duration) => {
            console.log('########AudiencePage onLeaveLiveStreaming', duration);
            if (typeof props.navigation.popTo === 'function') {
              props.navigation.popTo('HomePage');
            } else {
              // Compatible with React Navigation 6
              props.navigation.navigate('HomePage');
            }
          },
          topMenuBarConfig: {
            buttons: [ZegoMenuBarButtonName.minimizingButton, ZegoMenuBarButtonName.leaveButton],
          },
          onWindowMinimized: () => {
            console.log('[Demo]AudiencePage onWindowMinimized');
            if (typeof props.navigation.popTo === 'function') {
              props.navigation.popTo('HomePage');
            } else {
              // Compatible with React Navigation 6
              props.navigation.navigate('HomePage');
            }
          },
          onWindowMaximized: () => {
              console.log('[Demo]AudiencePage onWindowMaximized');
              props.navigation.navigate('AudiencePage', {
                userID: userID,
                userName: userName,
                liveID: liveID,
              });
          },
          showNoHostOnlineTipAfterSeconds: 3,
          audienceAudioVideoResourceMode: ZegoAudioVideoResourceMode.Default,
          video: ZegoUIKitVideoConfig.preset720P(),
          roomConfig: {
            onUsersEnter: (userInfoList) => {
                console.log('########AudiencePage onUsersEnter', userInfoList);
            },
            onUsersLeave: (userInfoList) => {
                console.log('########AudiencePage onUsersLeave', userInfoList);
            },
          },
          inRoomMessageViewConfig: {
              itemBuilder: CustomBuilder.inRoomMessageItemBuilder,
          },
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
