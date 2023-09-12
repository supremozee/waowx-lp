import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
// img
// import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
// import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <h1 style={{fontSize: "30px" , color: "darkgray"}}>We create distinctive brands and companies that push the boundaries of creativity.</h1>
                    <p style={{fontSize: "15px", color: "GrayText"}}>WAOWX Media and Marketing has 
                        consistently expanded brands and transformed businesses year after year, industry after industry, and happy client after happy client. In addition to being marketing superstars, we take great satisfaction in our unquenchable desire to 
                        enhance your brand via creativity and innovation while reaching excellence in our execution.</p>
                    <CustomTypography>
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                {/* <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                /> */}
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                {/* <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                /> */}
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <CustomTypography>
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;