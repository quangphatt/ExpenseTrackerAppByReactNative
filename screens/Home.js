import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image 
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Home = () => {


    const renderNavBar = () =>{
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableOpacity
                    style={{
                        justifyContent: 'center', 
                        width: 50,
                    }}
                    onPress={()=>console.log("Go back")}
                >
                    <Image 
                        source={icons.back_arrow}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        justifyContent: 'center', 
                        alignItems: 'flex-end',
                        width: 50,
                    }}
                    onPress={()=>console.log("More")}
                >
                    <Image 
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const renderHeader = () =>{
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding, 
                    paddingVertical: SIZES.padding, 
                    backgroundColor: COLORS.white
                }}
            >
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>Summary (private)</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row', 
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            backgroundColor: COLORS.lightGray,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>

                    <View
                        style={{
                            marginLeft: SIZES.padding
                        }}
                    >
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov, 2020</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1, 
                backgroundColor: COLORS.lightGray2,
            }}
        >
            {renderNavBar()}
            {renderHeader()}
        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
});

export default Home;

