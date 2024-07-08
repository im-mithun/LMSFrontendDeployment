import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Box,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector((state) => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1";
        const studentName = "Dipesh Awasthi";
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <StyledTriangleContainer>
        <StyledPaper elevation={3} onClick={() => navigateHandler("Admin")}>
          <Box mb={2}>
            <AccountCircle fontSize="large" />
          </Box>
          <StyledTypography>Admin</StyledTypography>
        </StyledPaper>
        <StyledPaper elevation={3} onClick={() => navigateHandler("Student")}>
          <Box mb={2}>
            <School fontSize="large" />
          </Box>
          <StyledTypography>Student</StyledTypography>
        </StyledPaper>
        <StyledPaper elevation={3} onClick={() => navigateHandler("Teacher")}>
          <Box mb={2}>
            <Group fontSize="large" />
          </Box>
          <StyledTypography>Faculty</StyledTypography>
        </StyledPaper>
      </StyledTriangleContainer>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: #f5f5dc; /* Light beige background */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const StyledTriangleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 250px;
  height: 150px;

  & > * {
    position: absolute;
  }

  & > :nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > :nth-child(2) {
    bottom: 10px;
    left: 25%;
    transform: translate(-50%, 50%);
  }

  & > :nth-child(3) {
    bottom: 10px;
    right: 25%;
    transform: translate(50%, 50%);
  }
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #f5f5dc; /* Light beige */
  color: black; /* Black font */
  cursor: pointer;
  border-radius: 50%; /* Make the paper circular */
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d3d3d3; /* Different hover color */
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 0;
  font-size: 1rem;
`;
