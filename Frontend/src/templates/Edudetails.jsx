import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
const KnowMore=({details})=>{
    return (<>
    <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='center' color={"rgba(0, 0, 0, 0.5)"} >
          know more
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign={"justify"} color="rgba(18, 0, 18, 0.6)">
       {details}
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
    </>)
}
export default KnowMore;