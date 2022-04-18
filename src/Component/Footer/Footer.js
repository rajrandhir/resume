import React from 'react'
import { Typography } from "@mui/material";
import "../Footer/Footer.css";
import ResumeData from '../../Utils/ResumeData';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
      <Typography className='footer_name'>{ResumeData.name}</Typography>
      </div>
       
      <div className='footer_right'>
        <Typography className='footer_copyright'>Designed and develped by <a href='' target='_blank'>Randhir</a>
          <br />
          clone idea from <a href='' target='_blank'>Travonline.</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer;