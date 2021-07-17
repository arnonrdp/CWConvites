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
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
            <Portfolio
              image="/gallery/convite1.jpg"
              title="Convite de Casamento"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio debitis ducimus, voluptates molestias adipisci, natus pariatur velit culpa veniam laborum incidunt quos at quo consequuntur quisquam fugit dolorem voluptatibus."
            />
          </div>
        </section>
      </main>
    </>
  )
}
