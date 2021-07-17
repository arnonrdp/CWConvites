import Image from 'react-bootstrap/Image';
import { Accordion, AccordionItem, AccordionButton,  AccordionPanel,  AccordionIcon, Box } from "@chakra-ui/react"

type PortfolioProps = {
  image: any;
  title: string;
  description: string;
}

export function Portfolio(props: PortfolioProps) {
  return (
    <div className="col">
      <div className="card">
        <Image className="card-img-top" src={props.image} alt="foto do cartão" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Detalhes...
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Aqui podemos inserir mais alguns detalhes dos convites.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

