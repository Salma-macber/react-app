import * as React from "react";
import { Dimensions, Text, View, Image, ImageSourcePropType } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

const data: ImageSourcePropType[] =
    [
        require('../../../../assets/images/slider/Social Media - 2.png'),
        require('../../../../assets/images/slider/image 6.png'),
        require('../../../../assets/images/slider/Social Media - 2.png'),
        require('../../../../assets/images/MyFitnessClub.png'),
        require('../../../../assets/images/slider/Social Media - 2.png'),
        require('../../../../assets/images/Favorite.png'),
        require('../../../../assets/images/slider/Social Media - 2.png'),
        require('../../../../assets/images/Get direction.png'),
        // ...new Array(6).keys()
    ];
const width = Dimensions.get("window").width;

function CarouselComponent() {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={{ flex: 1, marginEnd: 16 }}>
            <Carousel
                ref={ref}
                width={width}
                height={width / 2}
                data={data}
                onProgressChange={progress}
                autoPlay
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            // margin: 18,
                            borderWidth: 1,
                            // justifyContent: "center",
                        }}
                    >
                        <Image source={item}
                            width={width}
                            style={{
                                flex: 1,
                                // margin: 18,
                                borderWidth: 1,
                                // justifyContent: "center",
                            }} />
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    );
}

export default CarouselComponent;