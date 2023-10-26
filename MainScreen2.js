import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

import CreateApiHook from "./ApiHook";
import { styles } from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";


export default function MainScreen2() {
    const navigation = useNavigation();
    const route = useRoute();
    const baseUrl = "http://139.59.177.72/";

    const [searchQuery, setSearchQuery] = useState('');

    const { data, getData } = CreateApiHook();
    const [newData, setNewData] = useState(data);
    
    function onBookClick(bookTitle, chapters) {
        navigation.navigate('MainScreen3', { bookTitle, chapters });
    }

    //
    useEffect(() => {
        console.log("use effect");

        getData("http://139.59.177.72/api/books?page=1");

    }, []);

    useEffect(()=>{
        setNewData(data);
        console.log("test1")
    }, [data]);

    const onChangeSearch = query => {
        setSearchQuery(query);
        const filteredData = data.filter((book)=>  book.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setNewData(filteredData.length != 0 || searchQuery !== ""? filteredData : data);
        
    };


    return (
        <SafeAreaView style={[styles.container]}>

            <Text style={styles.heading}>
                Featured Books
            </Text>
            <View style={styles.spacing}>

            </View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <FlatList
                data={newData}
                keyExtractor={(item) => item._id}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { onBookClick(item.title, item.chapters) }}>
                        <View style={styles.listitem}>
                            <Image
                                source={{ uri: baseUrl + item.coverPhotoUri }}
                                style={styles.thumbnail}
                            />
                            <Text>{item.title}</Text>
                            <Text>{item.author.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}
