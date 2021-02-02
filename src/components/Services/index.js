import React from 'react';
import Icon1 from '../../images/vinylwraps.png';
import Icon2 from '../../images/ceramiccoating.png';
import Icon3 from '../../images/windowtint.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Vinyl Wraps</ServicesH2>
          <ServicesP>
            Starting from:
          </ServicesP>
          <ServicesH2>$1,900</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Ceramic Coating</ServicesH2>
          <ServicesP>
            Starting from:
          </ServicesP>
          <ServicesH2>$848.99</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Window Tint</ServicesH2>
          <ServicesP>
            Starting from:
          </ServicesP>
          <ServicesH2>$179.99</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
