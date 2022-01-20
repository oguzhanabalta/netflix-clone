import React from "react";
import { Footer } from "../components";


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">SSS</Footer.Link>
                    <Footer.Link href="#">Yatırımcı İlişkileri</Footer.Link>
                    <Footer.Link href="#">Kullanım Koşulları</Footer.Link>
                    <Footer.Link href="#">Bize Ulaşın</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Yardım Merkezi</Footer.Link>
                    <Footer.Link href="#">İş İmkanları</Footer.Link>
                    <Footer.Link href="#">Gizlilik</Footer.Link>
                    <Footer.Link href="#">Hız Testi</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Hesap</Footer.Link>
                    <Footer.Link href="#">Hediye Kartı Kullan</Footer.Link>
                    <Footer.Link href="#">Çerez Tercihleri</Footer.Link>
                    <Footer.Link href="#">Yasal Hükümler</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Medya Merkezi</Footer.Link>
                    <Footer.Link href="#">İzleme Yolları</Footer.Link>
                    <Footer.Link href="#">Kurumsal Bilgiler</Footer.Link>
                    <Footer.Link href="#">Sadece Netflix'te</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix Türkiye</Footer.Text>
        </Footer>
    )
}