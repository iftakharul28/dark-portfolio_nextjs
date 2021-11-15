import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import menuItems from './HeaderData';
import {
  Container,
  IconWrapper,
  MenuWrapper,
  SocialIconWrapper,
  NavLink,
  SocialIcon,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <IconWrapper>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </IconWrapper>
    <MenuWrapper>
      {menuItems.map((menuItem, i) => (
        <NavLink href={menuItem.url} key={menuItem.id}>
          {menuItem.name}
        </NavLink>
      ))}
    </MenuWrapper>
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
  </Container>
);

export default Header;
