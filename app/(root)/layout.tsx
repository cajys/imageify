/*
 * @Descripttion: 
 * @version: 
 * @Author: poor-rain
 * @Date: 2024-07-07 14:39:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-07-08 18:13:37
 */

import MobileNav from '@/components/shared/MobileNav'

import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
        {/* {Sidebar} */}
        <Sidebar />
        {/* {mobilenav} */}
        <MobileNav />
        <div className='root-container'>
             <div className='wrapper'>
                {children}
                </div> 
        </div>
        
    </main>
    
  )
}

export default Layout