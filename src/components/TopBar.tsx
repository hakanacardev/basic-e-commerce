import Search from '@mui/icons-material/Search';
import * as React from 'react';
import "../App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Container, TextField } from '@mui/material';
import Input from './StyledTextField';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useCustomContext } from '../context/GlobalContext';

interface Iprops {
    icon?: JSX.Element
}
export default function TopBar(props: Iprops) {
    const { totalPrice } = useCustomContext() as any

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">

                <Container maxWidth="lg">
                    <Toolbar>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ marginLeft: 5 }}>
                            <Input
                                icon={<Search />}
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <Button
                                color='inherit'
                                startIcon={<WorkOutlineIcon />}
                            >
                                {totalPrice}
                            </Button>
                            <Button
                                color='inherit'
                                startIcon={<AccountCircle />}
                            >
                                deneme2
                            </Button>
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>
        </Box>
    )
}