import React, { memo } from 'react';
import CONFIG from '../constants';
import Icon from '../components/Icon';
import Page from '../components/Page';

const About = () =>
  <Page> 
      <p>Full stack developer, JavaScript enthusiast and UX specialist. I am a hobbyist coder who loves what I do and consider myself a true craftsman with a focus on clean scalable code and elegant but intuitive UX. </p> 
      <p>I've been an engineer since birth but have the academic credentials to back it up with B.Eng and M.Eng and am a member of Engineers Ireland.</p>
      <p>I have been developing web based applications since 2005 as a freelance developer, full-time professional and a consultant. </p>
      <p>I have a passion for technology especially blockchain, cryptocurrencies, smart home setup and renewable energy. </p>
      <p>Outside of work I am very interested in health and fitness. I regularly weight train and have been playing football for a team for as long as I can remember. I also like to surf and snowboard whenever I can.</p>
      <p>Reach me at:<a href="mailto:pete@cteic.ie" target="_top">pete@cteic.ie</a></p>
      <Icon icon="twitter" href={CONFIG.SOCIAL.TWITTER} />
      <Icon icon="github" href={CONFIG.SOCIAL.GITHUB} />
      <Icon icon="linkedIn" href={CONFIG.SOCIAL.LINKEDIN} />
      <Icon icon="stackOverflow" href={CONFIG.SOCIAL.STACKOVERFLOW} />
  </Page>;

export default memo(About);