import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'

// destructuring album from props
const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album
    const {
        imageStyle,
        headerContentStyle,
        imageContainerStyle,
        headerTextStyle, 
        coverImageStyle} = styles
    return(
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={imageStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={coverImageStyle} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize: 18
    },
    imageStyle:{
        height: 50,
        width: 50
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    coverImageStyle:{
        height: 300,
        flex: 1,
        width: null
    }

}

export default AlbumDetail