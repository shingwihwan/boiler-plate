/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../_actions/user_action';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck() {

        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            //To know my current status, send Auth request 
            dispatch(auth()).then(response => {
                console.log(response);

                // 로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if (option) {
                        navigate('/login')
                    }
                } else {
                    // 로그인 한 상태
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        if (option === false) {
                            navigate('/')
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}


