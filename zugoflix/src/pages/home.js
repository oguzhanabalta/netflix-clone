import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Sınırsız film, dizi ve çok daha fazlası.</Feature.Title>
          <Feature.SubTitle>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="E-posta adresi" />
            <OptForm.Button>Başlayın</OptForm.Button>

          </OptForm>
        </Feature>

      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />


    </>
  );
}