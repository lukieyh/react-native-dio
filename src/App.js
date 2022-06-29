import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from "react-native";

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#6f7780';
const imageProfileGithub = "https://avatars.githubusercontent.com/u/105403914?v=4";
const urlToMyGithub = "https://github.com/lukieyh";

const App = ()=> {
    const handlePressGoToGithub = async () => {
        console.log("Verificando Link");
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
        console.log("Link aprovado");
        console.log("Abrindo Link...");
        await Linking.openURL(urlToMyGithub);
    }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
          <Image 
          accessibilityLabel="Sora" 
          style={style.avatar} 
          source={{uri: imageProfileGithub }} 
        />
        <Text accessibilityLabel="Nome: Lucas da Silva" style={[style.defaultText, style.name]}>Lucas da Silva</Text>
        <Text accessibilityLabel="Nickname: L U K I E Y H" style={[style.defaultText, style.nickname]}>lukieyh</Text>
        <Text accessibilityLabel="Descrição: Analysis and systems Development student | Learning to program." 
        style={[style.defaultText, style.description]}>👾Analysis and systems Development student | Learning to program👾.</Text>
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
        </View>
        </Pressable>
        </View>
    </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Explandir para a tela inteira 
        justifyContent: "center",
        alignItems: "center",
    },
    
    content: {
        alignItems: "center",
        padding: 50,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontSize: 25, 
        fontWeight: "bold"      
    },
    nickname: {
        fontSize: 17,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 17,
        fontWeight: "bold"  
    },
    button: {
       marginTop: 30,
       backgroundColor: colorDarkFontGithub,
       borderRadius: 10,
       padding: 20, 
    },
    textButton: {
        fontSize: 15,
        fontWeight: "bold",
    }
});