import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

export default function Feature({children, ...restPost}){
    return <Container {...restPost}>{children}</Container>
};


Feature.Title = function FeatureTitle({children, ...restPost}){
    return <Title {...restPost}>{children}</Title>
};

Feature.SubTitle = function FeatureSubTitle({children, ...restPost}){
    return <SubTitle {...restPost}>{children}</SubTitle>
};