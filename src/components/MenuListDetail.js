import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MenuDetail = ({food}) => {
    const { foodname, foodprice, foodimage } = food;
    return(
        
        <Card>
            <CardSection>
                <View style={styles.headerfoodandPriceStyle}>
                    <Text style={styles.foodnameStyle}>{foodname}</Text>
                    <Text style={styles.foodpriceStyle}>{foodprice}$</Text>
                </View> 
            </CardSection>
            <CardSection>
                <Image 
                    style={styles.imageStyle} 
                    source={{ uri: foodimage }} 
                />
            </CardSection>
            <CardSection style={styles.buttonStyle}>
                <Text>Edit</Text>
            </CardSection>
        </Card>
    )
};

const styles = {

    headerfoodandPriceStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    foodnameStyle: {
        fontSize: 20,
    },
    foodpriceStyle:{
        fontSize: 20,        
    },
    imageStyle: {
        justifyContent: 'center',
        height: 40,
        width: 40,
        paddingTop: 15,
    }
}

export default MenuDetail;
