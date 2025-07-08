"use client"
import Header from '@/components/Header';
import React from 'react'



const Settings = () => {

  const userSettings = {
    userName: "john doe",
    email: "john.doe@example.com",
    teamName: "Development",
    roleName: "Developer"
  }

  const labelStyle = "block text-sm font-medium dark:text-white";
  const textStyle = "mt-1 block w-full border border-gray-300 rounded-md rounded-sm p-2 dark:text-white";



  return (

    <div className='p-8'>
      <Header name="Settings"/>
      <div className='space-y-4'>
        <div>
          <label className={labelStyle}>Username</label>
            <div className={textStyle}>{userSettings.userName}</div>
          <label className={labelStyle}>Email</label>
            <div className={textStyle}>{userSettings.email}</div>
          <label className={labelStyle}>Team</label>
            <div className={textStyle}>{userSettings.teamName}</div>
          <label className={labelStyle}>Role</label>
            <div className={textStyle}>{userSettings.roleName}</div>
            </div>
        </div>
      </div>
    
  )
}

export default Settings;