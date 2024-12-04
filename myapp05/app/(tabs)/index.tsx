import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

/*
Descrição: Crie uma tela de boas-vindas com uma imagem de fundo e um texto de boas-vindas no centro.

Instruções:

Use um ImageBackground como imagem de fundo (pode ser uma paisagem ou uma imagem inspiradora).
Centralize um Text no meio da tela com uma mensagem de boas-vindas.
Aplique um efeito de sombreado ao texto para destacá-lo do fundo.

*/

export default function BoasVindas() {
  return (
        <ImageBackground
          source={{ uri: 'https://gerarmemes.s3.us-east-2.amazonaws.com/memes/8bd81241.jpg' }}
          style={styles.fundo}
          >
          <View style={styles.corpo}>
          <Text style={styles.saudacao}>
            BOAS-VINDAS 😘👍
          </Text>
        </View>
        </ImageBackground>
          
      );
};

      const styles=StyleSheet.create({

        fundo: {
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        },

        corpo: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 20,
          borderRadius: 10,
      },

      saudacao: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      }, 
});