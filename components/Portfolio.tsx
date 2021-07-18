import { Accordion, AccordionItem, AccordionButton,  AccordionPanel,  AccordionIcon, Box, Image, Flex, Badge, Text, useDisclosure,
  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";

type PortfolioProps = {
  image: any;
  title: string;
  description: string;
  tag?: string;
}

export function Example(props: PortfolioProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box onClick={onOpen} p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src={props.image} alt="" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">{props.tag}</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          {props.title}
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {props.description}
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exercitationem voluptas, dignissimos in fuga ipsam impedit? Repellendus sequi in dolorum quo, animi aliquam vitae et ab cupiditate soluta ratione quas.</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="ghost">Quero Este!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  );
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

