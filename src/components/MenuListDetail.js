import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';

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
            
            {foodimage ? 
                <CardSection>
                    <Image 
                        style={styles.imageStyle} 
                        source={{ uri: foodimage }} 
                    />
                </CardSection> 

                : console.log("image not exist") 
            }
            
            <CardSection style={styles.buttonStyle}>
                <Button label="Edit"/>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: 300,
        paddingTop: 15,
    }
}

export default MenuDetail;
