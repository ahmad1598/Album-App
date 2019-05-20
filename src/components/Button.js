import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

// this below onPress is a props comes from parent component
const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles
    return (
        // this below onPress is click event
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: .5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export default Button