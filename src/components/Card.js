import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Card = (props) => {
  return (
    <div className='Card'>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h2>{props.details.title}</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>{props.details.subTitle}</h3>
          </Typography>
          <Typography>
            {props.details.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Card