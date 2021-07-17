import React from 'react';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Topbar } from '../components/Topbar';

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <About />
        <section>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Maria"
              description="Maria, Maria, Maria."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de José"
              description="José, José, José."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Antônia"
              description="Antônia, Antônia, Antônia."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Carol"
              description="Carol, Carol, Carol."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Wanderson"
              description="Wanderson, Wanderson, Wanderson."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Idalina"
              description="Idalina, Idalina, Idalina."
            />
          </div>
        </section>
      </main>
    </>
  )
}
