import React from 'react'
import {Wrapper,Title,Row, Container,Column,Link} from './style/Footer'


  export  default function Footer({ childern , ...resProps}) {
    return <Container{...resProps}>{childern}</Container>
}

Footer.Wrapper = function FooterWrapper({childern,...resProps}){
    return<Wrapper{...resProps}>{childern}</Wrapper>
}
Footer.Row = function FooterRow({childern,...resProps}){
    return<Row{...resProps}>{childern}</Row>
}

Footer. Column  = function FooterColumn ({childern,...resProps}){
    return<Column{...resProps}>{childern}</Column>
}

Footer.Link = function FooterLink({childern,...resProps}){
    return<Link {...resProps}>{childern}</Link >
}

Footer.Title = function FooterTitle({childern,...resProps}){
    return<Title{...resProps}>{childern}</Title>
}

