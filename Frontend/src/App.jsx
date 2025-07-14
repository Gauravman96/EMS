// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import AdminDashboard from "./pages/AdminDashboard";
// import EmployeeDashboard from "./pages/EmployeeDashboard";
// import PrivateRoutes from "../utils/PrivateRoutes";
// import RoleBaseRoutes from "../utils/RoleBaseRoutes";
// import AuthProvider from "../context/authContext"; // ✅ Wrapping provider

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navigate to="/admin-dashboard" />} />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/admin-dashboard"
//             element={
//               <PrivateRoutes>
//                 <RoleBaseRoutes requiredRole={["admin"]}>
//                   <AdminDashboard />
//                 </RoleBaseRoutes>
//               </PrivateRoutes>
//             }
//           />
//           <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoutes from "../utils/PrivateRoutes";
import RoleBaseRoutes from "../utils/RoleBaseRoutes";
// import AuthProvider from "./context/authContext";
import AuthProvider from "./context/authContext";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["admin"]}>
                  <AdminDashboard />
                </RoleBaseRoutes>
              </PrivateRoutes>
            }
          />

          <Route
            path="/employee-dashboard"
            element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["employee"]}>
                  <EmployeeDashboard />
                </RoleBaseRoutes>
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
