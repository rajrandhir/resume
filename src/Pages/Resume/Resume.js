import { Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import CustomTimeline, { CustomTimelineSeprator } from '../../Timeline/CustomTimeline';
import ResumeData from '../../Utils/ResumeData';
import WorkIcon from '@mui/icons-material/Work';


import '../Resume/Resume.css';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';


export const Resume = () => {
  const a = ResumeData.experiences.map(a=> a.description)
  console.log(a)
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography xs={12} variant='h6' className='section_title_text'>About me</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className='aboutme_text' variant='body2'>{ResumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Education and experices */}
      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
        <Typography xs={12} variant='h6' className='section_title_text'>Resume</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* expriences  */}
            <Grid item xs={12} md={6}>
              <CustomTimeline title='Working History' icon={<WorkIcon />}>
              {
                ResumeData.experiences.map((x) =>{
                  return(
                    <>
                    <TimelineItem>
                      <CustomTimelineSeprator />
                      <TimelineContent className='resume_content'>
                        <Typography className='timeline_title'>{x.title}</Typography>
                        <Typography variant='caption' className='timeline_Date'>{x.Date}</Typography>
                        <Typography variant='body2' className='timeline_description'>{x.description}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                    </>
                  )
                })
              }
              </CustomTimeline>
            </Grid>
            {/* Education details */}
            <Grid item xs={12} md={6}>
              <CustomTimeline title='Working History' icon={<WorkIcon />}>
              {
                ResumeData.experiences.map((x) =>{
                  return(
                    <>
                    <TimelineItem>
                      <CustomTimelineSeprator />
                      <TimelineContent className='resume_content'>
                        <Typography className='timeline_title'>{x.title}</Typography>
                        <Typography variant='caption' className='timeline_Date'>{x.Date}</Typography>
                        <Typography variant='body2' className='timeline_description'>{x.description}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                    </>
                  )
                })
              }
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className='secton'>
      <Grid item className='section_title mb_30'>
          <span></span>
        <Typography xs={12} variant='h6' className='section_title_text'>Services</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='space-around'>
            {
              ResumeData.services.map((service)=>{
                return(
                  <Grid item xs={12} sm={6} md={3}>
                    <div className='service'>
                      <Icon className='service_icon'>{service.icon}</Icon>
                      <Typography className='service_title' variant='h5'>{service.ttitle}</Typography>
                      <Typography className='service_desp' variant='body2'>{service.desp}</Typography>
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
      {/* Skill */}
      <Grid container className=''></Grid>
      {/* Contact */}
      <Grid container className=''></Grid>
    </>
  )
}

export default Resume;