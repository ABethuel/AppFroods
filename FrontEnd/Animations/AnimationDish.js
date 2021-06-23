import React from 'react'
import { Animated, Dimensions } from 'react-native'

class AnimationDish extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
          position: new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        Animated.spring(
            this.state.position,
            {
                toValue: 0,
                useNativeDriver: false
            }
        ).start()
    }

    render() {
        return(
            <Animated.View style={{ top: this.state.position }}>
                {this.props.children}
            </Animated.View>
        )
    }
}


export default AnimationDish