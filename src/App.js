import React from 'react';
import Layout from './components/layout/Layout';
import HeroV2 from './components/sections/v2/HeroV2';
import AboutV2 from './components/sections/v2/AboutV2';
import ExperienceV2 from './components/sections/v2/ExperienceV2';
import SkillsV2 from './components/sections/v2/SkillsV2';
import ProjectsV2 from './components/sections/v2/ProjectsV2';
import ContactV2 from './components/sections/v2/ContactV2';

function App() {
  return (
    <Layout>
      <HeroV2 />
      <AboutV2 />
      <ExperienceV2 />
      <SkillsV2 />
      <ProjectsV2 />
      <ContactV2 />
    </Layout>
  );
}

export default App;