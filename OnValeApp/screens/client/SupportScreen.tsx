//REACT
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

//COMPONENTS
import FaqItem from '../../components/FaqItem';
import { SupportCard } from '../../components/Card';

//THEME
import useTheme from '../../components/Themes';
import Section from '../../components/Section';
import Divider from '../../components/Divider'



//FUNCTION
export default function SupportScreen() {
    //STYLE
    const { colors } = useTheme();

    //TEST
    const FAQ = [
        { q: 'Como faço login?', a: 'Use seu CNPJ ou e-mail e senha cadastrados...' }
    ];

    //JSX
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.background2 }}>
            <Section title='Perguntas Frequentes' note='Antes de perguntar, dê uma olhada: sua resposta pode estar aqui.'>
                <View>
                    {FAQ.map((f, i) => (
                        <FaqItem key={i} question={f.q} answer={f.a} />
                    ))}
                </View>
            </Section>
            <Divider />
            <Section title="Fale Conosco" note='Conecte-se conosco nos canais oficiais: suporte, dúvidas e sugestões são sempre bem-vindos por lá. Responderemos o quanto antes!'>
                <SupportCard
                    icon="mail"
                    label="E-mail"
                    value="onvale.contabilidade@gmail.com"
                    url="mailto:onvale.contabilidade@gmail.com?subject=Suporte%20OnVale%20App"
                />
                <SupportCard
                    icon="message-circle"
                    label="WhatsApp"
                    value="+55 12 98204‑4681"
                    url="https://api.whatsapp.com/send?phone=5512982044681&text=Olá%20OnVale!%20Preciso%20de%20ajuda."
                />
                <SupportCard
                    icon="instagram"
                    label="Instagram"
                    value="@onvale_contabilidade"
                    url="https://www.instagram.com/onvale_contabilidade/"
                />
                <SupportCard
                    icon="map-pin"
                    label="Endereço"
                    value="Avenida Brasil, 338, Sala 3 — São José dos Campos/SP"
                    url="https://www.google.com/maps/place/OnVale+Contabilidade/@-23.1822569,-45.8763352,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4bebee442563:0x478ea0740fea08e9!8m2!3d-23.1822569!4d-45.873974!16s%2Fg%2F11s892w3vc?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                />
                <SupportCard
                    icon="globe"
                    label="Site"
                    value="Acesse nosso site!"
                    url="https://www.onvale.com.br/"
                />
            </Section>
        </ScrollView>
    );
}
