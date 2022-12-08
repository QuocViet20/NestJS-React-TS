import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { theme } from './shared/utils/theme'

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import PrivateRouter from "./features/auth/components/PrivateRouter";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRouter page={<HomePage />} />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
