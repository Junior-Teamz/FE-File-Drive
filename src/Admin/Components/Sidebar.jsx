import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
  Description as InvoiceIcon,
  Assignment as BlogIcon,
  Work as JobIcon,
  Directions as TourIcon,
} from '@mui/icons-material';

export default function Sidebar  () {
  const menuItems = [
    { text: 'App', icon: <HomeIcon /> },
    { text: 'E-Commerce', icon: <ShoppingCartIcon /> },
    { text: 'Analytics', icon: <AnalyticsIcon /> },
    { text: 'Banking', icon: <BankingIcon /> },
    { text: 'Booking', icon: <BookingIcon /> },
    { text: 'File', icon: <FileIcon /> },
    { text: 'User', icon: <UserIcon /> },
    { text: 'Product', icon: <ProductIcon /> },
    { text: 'Order', icon: <OrderIcon /> },
    { text: 'Invoice', icon: <InvoiceIcon /> },
    { text: 'Blog', icon: <BlogIcon /> },
    { text: 'Job', icon: <JobIcon /> },
    { text: 'Tour', icon: <TourIcon /> },
  ];

  return (
    <div className="w-64 h-full bg-white shadow-md">
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
