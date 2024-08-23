import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer } from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Analytics as AnalyticsIcon,
  AccountBalance as BankingIcon,
  EventNote as BookingIcon,
  Folder as FileIcon,
  Person as UserIcon,
  Category as ProductIcon,
  Receipt as OrderIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { text: 'App', icon: <HomeIcon className='text-white' /> },
    { text: 'Tes', icon: <ShoppingCartIcon  className='text-white'/> },
    { text: 'Tes', icon: <AnalyticsIcon className='text-white' /> },
    { text: 'Tes', icon: <BankingIcon  className='text-white'/> },
    { text: 'Tes', icon: <BookingIcon className='text-white'/> },
    { text: 'Tes', icon: <FileIcon className='text-white'/> },
    { text: 'Tes', icon: <UserIcon  className='text-white'/> },
    { text: 'Tes', icon: <ProductIcon className='text-white' /> },
    { text: 'Tes', icon: <OrderIcon  className='text-white'/> },
  ];

  return (
    <div className="flex max-h-full h-full mr-10 ">
      {/* Sidebar Drawer for Mobile */}
      <Drawer open={isSidebarOpen} onClose={toggleSidebar}>
        <div className="w-64 bg-gradient-to-r from-green-700 to-green-500 x text-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="font-bold">Dashboard</h1>
            {/* <IconButton onClick={toggleSidebar} className="text-white">
              <MenuIcon className='text-white' />
            </IconButton> */}
          </div>
          <List className="space-y-2 p-4">
            {menuItems.map((item, index) => (
              <ListItem button key={index} className="hover:bg-green-600 rounded-md">
                <ListItemIcon >{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      {/* Sidebar for Desktop */}
      <div className={`hidden md:block bg-gradient-to-r from-green-700 to-green-500 h-full text-white transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`font-bold `}>Dashboard</h1>
        </div>
        <List className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <ListItem button key={index} className="hover:bg-green-600 rounded-md">
              <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>

      {/* Hamburger Menu Button for Mobile Only */}
      <div className="md:hidden p-4">
        <IconButton onClick={toggleSidebar}>
          <MenuIcon  className='text-white'/>
        </IconButton>
      </div>

     
    </div>
  );
}
