import React from 'react';
import heroItems from './HeroData';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    {heroItems.map((heroItem, i) => (
      <LeftSection>
        <SectionTitle main center as="h1">
          {heroItem.title} <br />
          {heroItem.subTitle}
        </SectionTitle>
        <SectionText>{heroItem.text}</SectionText>
        <Button onClick={() => (window.location = 'https://google.com')}>
          {heroItem.buttonName}
        </Button>
      </LeftSection>
    ))}
  </Section>
);

export default Hero;
