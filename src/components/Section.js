import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children}) =>
  <section>
    {children}
  </section>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;