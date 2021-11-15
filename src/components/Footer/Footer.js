import React from 'react';
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import {
  Container,
  SocialIconWrapper,
  SocialIcon,
} from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:contact@demo.net">demo.net</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lightweight. Open‑source. No strings attached.</Slogan>
        </CompanyContainer>
        <SocialIconWrapper>
          <SocialIcon href="https://github.com/">
            <AiFillGithub size="3rem" />
          </SocialIcon>
          <SocialIcon href="https://about.gitlab.com/">
            <AiFillGitlab size="3rem" />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/">
            <AiFillLinkedin size="3rem" />
          </SocialIcon>
        </SocialIconWrapper>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
