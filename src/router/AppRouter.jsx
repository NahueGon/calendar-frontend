import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {

    const authStatus = 'auhtenticated';

    return (
        <Routes>

            {
                (authStatus === 'not-auhtenticated')
                ? <Route path="/auth/*" element={ <LoginPage /> } />
                : <Route path="/*" element={ <CalendarPage /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />

        </Routes>
    )
}
