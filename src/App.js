import React, { lazy, Suspense } from "react";
import { CircularProgress, Container, Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import PrimaryAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Protected, { AdminRoute } from "./pages/Protected";

const Profile = lazy(() => import("./pages/Profile"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));
const MakeAnAppointment = lazy(() => import("./pages/MakeAnAppointment"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Box
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                margin: "0 auto",
            }}
        >
            <PrimaryAppBar />
            <Container
                disableGutters
                maxWidth="xl"
                sx={{
                    flex: "1",
                }}
            >
                <Suspense
                    fallback={
                        <Container
                            sx={{
                                pt: 10,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <CircularProgress color="secondary" />
                        </Container>
                    }
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                            path="/make_an_appointment"
                            element={<MakeAnAppointment />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/admin"
                            element={
                                <AdminRoute>
                                    <Admin />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <Protected>
                                    <Profile />
                                </Protected>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Container>
            <Footer />
        </Box>
    );
}

export default App;
