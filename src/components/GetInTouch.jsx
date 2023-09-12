import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'

const GetInTouch = () => {
const handleClick = ()=> {
    window.location.replace(`https://waowx.com/outsourceteam/`)
}
    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
          <div style={{display: "flex", flexDirection: "column"}}>
            <h1>OutsourceTEAM will cover these for you:</h1>
            <span style={{marginTop: "30px"}}>
                <ul style={{padding: "12px"}}>
                    <li style={{padding: "10px"}}>Marketing/Digital Operation Strategy Session</li>
                    <li style={{padding: "10px"}}>Professional Social media management</li>
                    <li style={{padding: "12px"}}>Graphic Designs</li>
                    <li style={{padding: "12px"}}>Video productions/Ads</li>
                    <li style={{padding: "12px"}}>Content creation</li>
                    <li style={{padding: "12px"}}>Copywriting</li>
                    <li style={{padding: "12px"}}>Newsletter</li>
                    <li style={{padding: "12px"}}>Email list growth</li>
                    <li style={{padding: "12px"}}>Online correspondence</li>
                    <li style={{padding: "12px"}}>Website sales management </li>

                </ul>
            </span>
          </div>
            <Button 
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            onClick={handleClick}
            >
                OutSourceTeam -WaowxGroup
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;