import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


import "../Timeline/Timeline.css";
import { Typography } from '@mui/material';

export default function CustomTimeline({title, icon, children}) {
  return (
    <Timeline className='timeline'>
      {/* Item header */}
      <TimelineItem className='timeline_first'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header'>{icon} </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> <Typography variant='h6' className='timeline_header'>{title}</Typography></TimelineContent>
      </TimelineItem>
      {children}
      {/* Remaining header */}
      {/* <TimelineItem>
        <CustomTimelineSeprator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem> */}
      
    </Timeline>
  );
}
export const CustomTimelineSeprator = () =>{
  return(
    <TimelineSeparator className='seperator'>
          <TimelineDot variant='outline' className='timeline_dot_item'/>
          <TimelineConnector />
        </TimelineSeparator>
  )
}
