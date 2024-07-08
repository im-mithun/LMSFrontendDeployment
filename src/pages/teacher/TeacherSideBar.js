import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { useSelector } from 'react-redux';

const TeacherSideBar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const sclassName = currentUser.teachSclass;
    const location = useLocation();

    return (
        <>
            <React.Fragment>
                <ListItemButton
                    component={Link}
                    to="/"
                    selected={location.pathname === "/" || location.pathname === "/Teacher/dashboard"}
                >
                    <ListItemIcon>
                        <HomeIcon
                            sx={{
                                color: location.pathname === "/" || location.pathname === "/Teacher/dashboard" ? 'black' : 'inherit'
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Teacher/class"
                    selected={location.pathname.startsWith("/Teacher/class")}
                >
                    <ListItemIcon>
                        <ClassOutlinedIcon
                            sx={{
                                color: location.pathname.startsWith("/Teacher/class") ? 'black' : 'inherit'
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Class ${sclassName.sclassName}`} />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton
                    component={Link}
                    to="/Teacher/profile"
                    selected={location.pathname.startsWith("/Teacher/profile")}
                >
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon
                            sx={{
                                color: location.pathname.startsWith("/Teacher/profile") ? 'black' : 'inherit'
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/logout"
                    selected={location.pathname.startsWith("/logout")}
                >
                    <ListItemIcon>
                        <ExitToAppIcon
                            sx={{
                                color: location.pathname.startsWith("/logout") ? 'black' : 'inherit'
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    )
}

export default TeacherSideBar;
