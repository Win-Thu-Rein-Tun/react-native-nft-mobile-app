import { Text, View, Image, StatusBar, SafeAreaView, FlatList } from "react-native"
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants"
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from "../components"
import React from "react"

const DetailsHeader = ({data, navigation}) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={data.image}
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
      />
      <CircleButton 
        imgUrl={assets.left}
        left={15}
        top={StatusBar.currentHeight + 10}
        handlePress={() => navigation.goBack()}
      />
      <CircleButton 
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex : 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SIZES.font,
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo endDate={data.endDate}/>
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data}/>
              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}>
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details