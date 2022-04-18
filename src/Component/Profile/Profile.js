import { Typography } from "@mui/material";
import React from "react";
import "../Profile/Profile.css";
import CustomTimeline from "../../Timeline/CustomTimeline";
import ResumeData from "../../Utils/ResumeData";
import PersonIcon from '@mui/icons-material/Person';
import TimelineItem from "@mui/lab/TimelineItem";
import { CustomTimelineSeprator } from "../../Timeline/CustomTimeline";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/CustomButton";
import GetAppIcon from '@mui/icons-material/GetApp';

const ConstomTimelineItem = ({title, text, link}) =>{
    return(
        <TimelineItem>
            <CustomTimelineSeprator />
            <TimelineContent className="timeline_content">
             <Typography className="timeine_text" ><span>{title}: </span>{text}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}


const Profile = () =>{
    return(
        <div className="profile container_shadow">
            <div className="profie_name">
                <Typography className="name">{ResumeData.name}</Typography>
                <Typography className="title">{ResumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../Asset/Images/raj.jpg')} alt="image" />
            </figure>
            <div className="profie_information">
                <CustomTimeline icon={<PersonIcon />}>
                <ConstomTimelineItem title='Name' text={ResumeData.name} />
                <ConstomTimelineItem title='Mob' text={ResumeData.mob} />
                <ConstomTimelineItem title='Email' text={ResumeData.email} />
                <ConstomTimelineItem title='Address' text={ResumeData.address} />
                </CustomTimeline>
                {/* <br /> */}
                <div className="button_container">
                    <CustomButton text={'Download Cv'} icon={<GetAppIcon />} /> 
                </div>
            </div>

        </div>
    )
}

export default Profile;