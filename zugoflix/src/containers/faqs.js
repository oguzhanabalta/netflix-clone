import React from "react";
import Accordion from "../components/accordion";
import OptForm from "../components/opt-form";
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Sıkça Sorulan Sorular</Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Text>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="E-posta adresi" />
                <OptForm.Button>Başlayın</OptForm.Button>


            </OptForm>

        </Accordion>

    )
}
