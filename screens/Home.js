import { useState } from "react"
import { SafeAreaView, FlatList, View } from "react-native"
import { COLORS, NFTData } from "../constants"
import { HomeHeader, FocusedStatusBar, NFTCard } from "../components"

const Home = () => {

    const [nftData, setnftData] = useState(NFTData);
    
    const handleSearch = (value) => {
        if(!value.length) return setnftData(NFTData);

        const fileredData = NFTData.filter((item) => 
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if(fileredData.length) {
            setnftData(fileredData)
        } else {
            setnftData(NFTData)
        }
    }

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar background={COLORS.primary} />

        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
                <FlatList 
                    data={nftData}
                    renderItem={({item}) => <NFTCard data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                />
            </View>

            <View style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: -1,
            }}>
                <View style={{ height: 300, backgroundColor: COLORS.primary }}/>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}/>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Home