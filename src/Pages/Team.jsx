import React from 'react'
import {Box, Tab} from '@mui/material'
import {useState} from 'react'
import {TabList, TabPanel} from '@mui/lab'
import { TabContext } from '@mui/lab';
import "./Team.css";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";    
import teamsphoto from "../Assets/Teams/PHOTO FRAME.png"
import imagedegisti from "../Assets/art/animation1.png"

const Team = () => {

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      const nextTab = (parseInt(value) + 1).toString();
      if (nextTab <= '6') {
        setValue(nextTab);
      } else {
        setValue('1'); // En başa dön
      }
    } else if (event.key === 'ArrowLeft') {
      const prevTab = (parseInt(value) - 1).toString();
      if (prevTab >= '1') {
        setValue(prevTab);
      } else {
        setValue('6'); // En sona git
      }
    }
  };

   
  

  return (
          <div className="div-container-body-team"
          onKeyDown={handleKeyDown}
          tabIndex={0}>
      <div className="fixedtopleft-team">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-team">
        <a href="#frame_design">Design</a>
      </div>
      <div className="fixeddownleft-team">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-team">
        <div className="social-right-down-team">
          <a href="#">
            <img src={twitterhidden} alt="Twitter" />
          </a>
          <a href="#">
            <img src={instagramhidden} alt="Instagram" />
          </a>
        </div>
        <div>
          <a href="#frame_contact">Contact</a>
        </div>
      </div>
      
     <Box>
      <TabContext value={value}>
        <div className='Tabpanel-design' >
          <TabPanel value='1'>
            <div className='teams-container'>
              <div className='teams-img'>
              <div className='oturt'>
                   <img src={imagedegisti} alt="Teams" /> 
                  </div>
              </div>
              <div className='teams-info'>
                <h2 className='teams-header'>Full name</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique accusamus aut, molestias, quasi temporibus voluptate beatae ea possimus neque hic!
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='2'>
            <div className='teams-container'>
              <div className='teams-img'>
              <div className='oturt'>
                   <img src={imagedegisti} alt="Teams" /> 
                  </div>
              </div>
              <div className='teams-info'>
                <h2 className='teams-header'>Full name2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique accusamus aut, molestias, quasi temporibus voluptate beatae ea possimus neque hic!
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='3'>
            <div className='teams-container'>
              <div className='teams-img'>
              <div className='oturt'>
                   <img src={imagedegisti} alt="Teams" /> 
                  </div>
              </div>
              <div className='teams-info'>
                <h2 className='teams-header'>Full name3</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique accusamus aut, molestias, quasi temporibus voluptate beatae ea possimus neque hic!
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='4'>
            <div className='teams-container'>
              <div className='teams-img'>
              <div className='oturt'>
                   <img src={imagedegisti} alt="Teams" /> 
                  </div>
              </div>
              <div className='teams-info'>
                <h2 className='teams-header'>Full name4</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique accusamus aut, molestias, quasi temporibus voluptate beatae ea possimus neque hic!
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='5'>
            <div className='teams-container'>
              <div className='teams-img'>
              <div className='oturt'>
                   <img src={imagedegisti} alt="Teams" /> 
                  </div>
              </div>
              <div className='teams-info'>
                <h2 className='teams-header'>Full name5</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique accusamus aut, molestias, quasi temporibus voluptate beatae ea possimus neque hic!
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='6'>
            <div className='teams-container'>
              <div className='teams-img'>
              <div className='oturt'>
                   <img src={imagedegisti} alt="Teams" /> 
                  </div>
              </div>
              <div className='teams-info'>
                <h2 className='teams-header'>Full name6</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique accusamus aut, molestias, quasi temporibus voluptate beatae ea possimus neque hic!
                </p>
              </div>
            </div>
          </TabPanel>
        </div>
        <div className='sliderbar-teams'>
        <Box
          sx={{
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'row', // Butonları yatayda sıralamak için
          }}
        >
          <TabList
            aria-label='Tabs Example'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            tabIndex={0} // Yön tuşlarına basıldığında odak noktasını butonlara getirmek için
          >
            <Tab
              value='1'
              sx={{
                borderRadius: '50%',
                border: '1px solid white',
                width: '20px',
                height: '20px',
                marginRight: '10px',
                backgroundColor: value === '1' ? 'white' : 'transparent',
              }}
            ></Tab>
            <Tab
              value='2'
              sx={{
                borderRadius: '50%',
                border: '1px solid white',
                width: '20px',
                height: '20px',
                marginRight: '10px',
                backgroundColor: value === '2' ? 'white' : 'transparent',
              }}
            ></Tab>
            <Tab
              value='3'
              sx={{
                borderRadius: '50%',
                border: '1px solid white',
                width: '10px',
                height: '20px',
                marginRight: '10px',
                backgroundColor: value === '3' ? 'white' : 'transparent',
              }}
            ></Tab>
            <Tab
              value='4'
              sx={{
                borderRadius: '50%',
                border: '1px solid white',
                width: '20px',
                height: '20px',
                marginRight: '10px',
                backgroundColor: value === '4' ? 'white' : 'transparent',
              }}
            ></Tab>
            <Tab
              value='5'
              sx={{
                borderRadius: '50%',
                border: '1px solid white',
                width: '20px',
                height: '20px',
                marginRight: '10px',
                backgroundColor: value === '5' ? 'white' : 'transparent',
              }}
            ></Tab>
            <Tab
              value='6'
              sx={{
                borderRadius: '50%',
                border: '1px solid white',
                width: '20px',
                height: '20px',
                marginRight: '10px',
                backgroundColor: value === '6' ? 'white' : 'transparent',
              }}
            ></Tab>
          </TabList>
        </Box>
        </div>
      </TabContext>
    </Box>
</div>
   
  


    
    
  )
}

export default Team