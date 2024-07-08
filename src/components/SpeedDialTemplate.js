import React from 'react'
import { SpeedDial, SpeedDialAction, styled } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SpeedDialTemplate = ({ actions }) => {
    return (
        <CustomSpeedDial
            ariaLabel="SpeedDial playground example"
            icon={<SettingsIcon style={{ color: '#ffffff', fontSize: '1.8rem' }} />}
            direction="left"
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.action}
                />
            ))}
        </CustomSpeedDial>
    )
}

export default SpeedDialTemplate

const CustomSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #000000;
    color: #ffffff;
  }
`;
