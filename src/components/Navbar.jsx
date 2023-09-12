import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import { Link } from 'react-router-dom';


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const handleAboutClick = ()=> {
    window.location.replace('https://waowx.com/about/')
}
const handleContactClick = ()=> {
    window.location.replace('https://waowx.com/contact/')
}
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: <div onClick={handleAboutClick}>About</div>,
    },
    {
        text: <div onClick={handleContactClick}>Contact</div> 
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'white', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component="h2"
                style={{fontSize: "30px", color: "blue", fontFamily: "fantasy"}}
                >
                    WAOW-<span style={{color: 'black', fontSize: "50px", fontFamily: "none"}}>X</span>
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: 'blue',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
