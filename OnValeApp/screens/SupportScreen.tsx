//REACT
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

//COMPONENTS
import { SectionTitle } from '../components/SectionTitle';
import { FaqItem } from '../components/FaqItem';
import { ContactCard } from '../components/ContactCard';
import useTheme from '../components/Themes';

//TEST
const FAQ = [
    { q: 'Como faço login?', a: 'Use seu CNPJ ou e-mail e senha cadastrados...' }
];

export default function SupportScreen() {
    const { colors } = useTheme();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.background2 }}>
            <SectionTitle title="Perguntas Frequentes" />
            <View>
                {FAQ.map((f, i) => (
                    <FaqItem key={i} question={f.q} answer={f.a} />
                ))}
            </View>

            <SectionTitle title="Fale Conosco" />
            <ContactCard
                icon="mail"
                label="E-mail"
                value="onvale.contabilidade@gmail.com"
                url="mailto:onvale.contabilidade@gmail.com?subject=Suporte%20OnVale%20App"
            />
            <ContactCard
                icon="message-circle"
                label="WhatsApp"
                value="+55 12 98204‑4681"
                url="https://api.whatsapp.com/send?phone=5512982044681&text=Olá%20OnVale!%20Preciso%20de%20ajuda."
            />
            <ContactCard
                icon="instagram"
                label="Instagram"
                value="@onvale_contabilidade"
                url="https://www.instagram.com/onvale_contabilidade/"
            />
            <ContactCard
                icon="map-pin"
                label="Endereço"
                value="Avenida Brasil, 338, Sala 3 — São José dos Campos/SP"
                url="https://www.google.com/maps/place/OnVale+Contabilidade/@-23.1822569,-45.8763352,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4bebee442563:0x478ea0740fea08e9!8m2!3d-23.1822569!4d-45.873974!16s%2Fg%2F11s892w3vc?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            />

            <View style={{ height: 32 }} />
        </ScrollView>
    );
}
