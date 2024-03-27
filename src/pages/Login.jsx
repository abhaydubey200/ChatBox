import React, { useState } from "react";
import {
    Button,
    Container,
    Paper,
    TextField,
    Typography,
    Stack,
    IconButton,
    Avatar,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", { name, bio, username, password, avatar });
    };

    return (
        <div
            style={{
                backgroundImage: "linear-gradient(rgba(255, 275, 210), rgba(249,169,169))",
            }}
        >
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isLogin ? (
                        <>
                            <Typography variant="h5">Login</Typography>
                            <form>
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3 }}
                                >
                                    Sign In
                                </Button>
                                <Typography sx={{ textAlign: "center" }}>OR</Typography>
                                <Button fullWidth variant="text" onClick={toggleLogin}>
                                    Register
                                </Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5">Register</Typography>
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    width: "100%",
                                    marginTop: "1rem",
                                }}
                            >
                                <Stack position="relative" width="10rem" margin="auto">
                                    <Avatar
                                        sx={{
                                            width: "10rem",
                                            height: "10rem",
                                            objectFit: "contain",
                                        }}
                                        src={avatar ? URL.createObjectURL(avatar) : ""}
                                    />
                                    <input
                                        accept="image/*"
                                        id="avatar-upload"
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={handleAvatarChange}
                                    />
                                    <label htmlFor="avatar-upload">
                                        <IconButton
                                            component="span"
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                                color: "white",
                                                bgcolor: "rgba(0,0,0,0.5)",
                                                ":hover": {
                                                    bgcolor: "rgba(0,0,0,0.7)",
                                                },
                                            }}
                                        >
                                            <CameraAltIcon />
                                        </IconButton>
                                    </label>
                                </Stack>
                                
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    label="Bio"
                                    margin="normal"
                                    variant="outlined"
                                    name="bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3 }}
                                >
                                    Sign Up
                                </Button>
                                <Typography sx={{ textAlign: "center" }}>OR</Typography>
                                <Button fullWidth variant="text" onClick={toggleLogin}>
                                    Login
                                </Button>
                            </form>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default Login;
