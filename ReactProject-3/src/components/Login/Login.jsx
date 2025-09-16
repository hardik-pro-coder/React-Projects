// import React from 'react'
// import './Login.css'
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import AdsClickIcon from '@mui/icons-material/AdsClick';
// import CloseIcon from '@mui/icons-material/Close';

// const Login = ({handleLoginSuccess}) => {
//     return (
//         <div className="EighthForm-Main">
//             <div className="EighthForm-Paper">
//                 <Paper elevation={15} sx={{ width: 428, height: 400, backgroundColor: '#ffe0cc' }}>
//                     <div className="form-heading">
//                         <h2>Log In</h2>
//                         <CloseIcon onClick={() => setOpenLogin(false)} style={{ fontSize: '40px', marginTop: '10px', cursor: 'pointer' }} />
//                     </div>

//                     <div className="EighthForm-Input">
//                         <TextField label="Username" type='text' />
//                         <TextField label="Password" type='password' />
//                         <TextField label="Email" />

//                     </div>

//                     <div className="EighthForm-Button">
//                         <Button onClick={handleLoginSuccess} variant="contained" color="warning">
//                             Submit
//                             <AdsClickIcon />
//                         </Button>

//                     </div>

//                 </Paper>

//             </div>

//         </div>
//     )
// }

// export default Login


// ----- //


import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import './Login.css';

const Login = ({ handleLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username && password) {
            console.log('Login attempt with:', { username, password, email });
            handleLoginSuccess(username);
        } else {
            alert('Please enter a username and password.');
        }
    };

    return (
        <div className="EighthForm-Main">
            <div className="EighthForm-Paper">
                <Paper elevation={15} sx={{ width: 428, height: 400, backgroundColor: '#ffe0cc' }}>
                    <div className="form-heading">
                        <h2>Log In</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="EighthForm-Input">
                            <TextField
                                label="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="EighthForm-Button">
                            <Button type="submit" variant="contained" color="warning">
                                Submit
                                <AdsClickIcon />
                            </Button>
                        </div>
                    </form>

                </Paper>

            </div>
        </div>
    );
};

export default Login;