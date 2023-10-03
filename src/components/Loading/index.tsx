import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface LoadingViewProps {
    marginLeft: string | any;
}

const LoadingView = ({ marginLeft }: LoadingViewProps) => {
    return (
        <LottieView
            source={require('../../assets/animation_lala.json')}
            style={{ marginLeft: marginLeft, width: 100, height: 100 }}
            autoPlay={true}
            loop
        />
    );
};

export default LoadingView;
