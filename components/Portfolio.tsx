import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Image, Flex, Spacer, Badge, Text, useDisclosure, Button, 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link, UnorderedList, ListItem
} from "@chakra-ui/react";

type PortfolioProps = {
  image: any;
  title: string;
  description: string;
  tag: string;
  modalImage1?: any;
  modalImage2?: any;
  modalLinha1?: any;
  modalLinha2?: any;
  modalLinha3?: any;
  modalLinha4?: any;
  modalLinha5?: any;
  modalLinha6?: any;
}

export function Portfolio(props: PortfolioProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src={props.image} alt="" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="red">{props.tag}</Badge>
        <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="red.800">
          {props.title}
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {props.description}
      </Text>
      <Text align="right" fontSize="sm">
        <Link onClick={onOpen}>
          <b>Ver detalhes</b>
        </Link>
      </Text>

      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Image m="1" boxSize="120px" objectFit="cover" src={props.modalImage1} alt="" />
              <Image m="1" boxSize="120px" objectFit="cover" src={props.modalImage2} alt="" />
            </Flex>
            <UnorderedList>
              <ListItem>{props.modalLinha1}</ListItem>
              <ListItem>{props.modalLinha2}</ListItem>
              <ListItem>{props.modalLinha3}</ListItem>
              <ListItem>{props.modalLinha4}</ListItem>
              <ListItem>{props.modalLinha5}</ListItem>
              <ListItem>{props.modalLinha6}</ListItem>
            </UnorderedList>
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

export function Example(props: PortfolioProps) {
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

