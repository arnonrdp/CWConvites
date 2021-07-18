import React from 'react';
import { About } from '../components/About';
import { Example, Portfolio } from '../components/Portfolio';
import { Topbar } from '../components/Topbar';
import { convites } from '../data/products';

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <About />
        <section>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <Example
              image={"/gallery/brenna1.jpg"}
              tag={"casamento"}
              title={"Brenna & Michael"}
              description={"Convite em fio de cera e lacre de cera"}
            />
          </div>

          <br />
          
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

            {convites.map((c, index) => (
              <Portfolio
                key={index}
                image={c.image}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
