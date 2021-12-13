import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from '../Components/Pages/Home';
import PatientBooking from '../Components/Pages/PatientBooking';
import DoctorLogin from '../Components/Pages/DoctorLogin';
import DoctorPortal from '../Components/Pages/DoctorPortal';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/patient-booking" element={<PatientBooking />} />
                <Route path="/doctor-login" element={<DoctorLogin />} />
                <Route path="/doctor-portal" element={<DoctorPortal />} />
            </Routes>
        </Router>
    );
};

export default Routing;