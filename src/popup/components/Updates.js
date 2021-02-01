'use strict';

import React from 'react';
import styled from 'styled-components';
import Section from './Common/Section';

const Updates = () => {
  return (
    <Section width={350}>
      <h1>Updates</h1>
      <p>Welcome to version 0.4</p>
      <p>
        This release is a complete rewrite of the codebase, and it includes many
        under the hood improvements
      </p>
      <span>Release notes:</span>
      <ul>
        <li>
          Changes to minutes while the timer is running are now queued; the
          timer will not reset 🕗
        </li>
        <li>More ways to configure automatic start 🔁</li>
        <li>Option to disable notifications ⏹</li>
        <li>Bug fixes 🐞</li>
      </ul>
    </Section>
  );
};

export default Updates;
