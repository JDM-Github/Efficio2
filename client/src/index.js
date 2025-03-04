import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import ClientRoute from "./Routes/Client/ClientRoute.tsx";
import AdminRoute from "./Routes/Admin/AdminRoute.tsx";
import Registration from "./Routes/Registration/Registration.tsx";
import StaffRoute from "./Routes/Staff/StaffRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<Registration />} />
				<Route path="/client/*" element={<ClientRoute />} />
				<Route path="/staff/*" element={<StaffRoute />} />
				<Route path="/admin/*" element={<AdminRoute />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
