import React from 'react';
import { About } from '../components/About';
import { Content } from '../components/Content';
import { Topbar } from '../components/Topbar';

export default function Home() {
  return (
    <>
      <Topbar />
      <About />
      <Content />
    </>
  )
}
