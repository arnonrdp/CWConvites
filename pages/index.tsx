import React from 'react';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Topbar } from '../components/Topbar';
import { convites } from '../data/products';
import { SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <About />
        <section>
          <SimpleGrid minChildWidth="280px" spacing="20px">
            {convites.map((c, index) => (
              <Portfolio
                key={index}
                image={c.image}
                tag={c.tag}
                title={c.title}
                description={c.description}
                modalImage1={c.modalImage1}
                modalImage2={c.modalImage2}
                modalLinha1={c.modalLinha1}
                modalLinha2={c.modalLinha2}
                modalLinha3={c.modalLinha3}
                modalLinha4={c.modalLinha4}
                modalLinha5={c.modalLinha5}
                modalLinha6={c.modalLinha6}
              />
            ))}
          </SimpleGrid>
        </section>
      </main>
    </>
  )
}
