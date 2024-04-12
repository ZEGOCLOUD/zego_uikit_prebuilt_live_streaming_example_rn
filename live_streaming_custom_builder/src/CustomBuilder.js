import { Text, View } from "react-native";

export class CustomBuilder {
  static toggleCameraBuilder = (isOn : boolean) => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{isOn ? 'C On' : 'C Off'}</Text>
    </View>
    );
  }
  
  static toggleMicrophoneBuilder = (isOn: boolean) => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{isOn ? 'M On' : 'M Off'}</Text>
    </View>
    );
  }

  static switchCameraBuilder = (isFront: boolean) => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{isFront ? 'Front' : 'Back'}</Text>
    </View>
    );
  }

  // deviceType
  // ZegoAudioRouteSpeaker=(0) ZegoAudioRouteHeadphone=(1) ZegoAudioRouteBluetooth=(2) ZegoAudioRouteReceiver=(3) ZegoAudioRouteExternalUSB=(4) ZegoAudioRouteAirPlay=(5)
  static switchAudioOutputBuilder = (deviceType: number) => {
    console.log('+++++++++++++ switchAudioOutputBuilder', deviceType);
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`D: ${deviceType}`}</Text>
    </View>
    );
  }

  static leaveBuilder = () => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Quit'}</Text>
    </View>
    );
  }

  static minimizingBuilder = () => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Mini'}</Text>
    </View>
    );
  }

  static memberBuilder = (memberCount: number, requestCoHostCount: number) => {
    console.log('++++++++, memberBuilder', memberCount, requestCoHostCount);
    return (
      <View style={{width: 80, height: 30, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{`Member: ${memberCount}`}</Text>
      </View>
    );
  }

  static hostAvatarBuilder = (host: any) => {
    console.log('++++++++, hostAvatarBuilder', host);
    return (
      <View style={{width: 80, height: 30, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{host.userName}</Text>
      </View>
    );
  }

  static enableChatBuilder = (enableChat: boolean) => {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{enableChat ? 'Chat On' : 'Chat Off'}</Text>
      </View>
    );
  }

  static chatBuilder = (isOn: boolean) => {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{isOn ? 'Chat On' : 'Chat Off'}</Text>
      </View>
    );
  }
}