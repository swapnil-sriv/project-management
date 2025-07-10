"use client"
import React from 'react'
import {Authenticator} from "@aws-amplify/ui-react";
import {Amplify} from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolClientId : process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || "",
            userPoolId : process.env.NEXT_PUBLIC_USER_POOL_ID || "",
            
        },
    },
})

const formFields = {
    signUp: {
        username: {
            order: 1,
            placeholder: "Choose a username",
            label: "Username",
            inputProps: {required: true},
        },
        email: {
            order: 2,
            placeholder: "Enter your email.",
            label: "Email",
            inputProps: {type:"email", required: true},
        },
        password: {
            order: 3,
            placeholder: "Enter password",
            label: "Password",
            inputProps: {type: "password", required: true},
        },
        confirm_password: {
            order: 4,
            placeholder: "Confirm password",
            label: "Confirm Password",
            inputProps: {type: "password", required: true},
        },
    }
}

const authProvider = ({children}: any) => {
  return (
  
        <Authenticator formFields={formFields}>
            {({user}: any)=>
                user ? (<div>{children}</div>) :
                (<div><h1>Please sign in below</h1></div>)
            }
        </Authenticator>
   
  ) 
}

export default authProvider