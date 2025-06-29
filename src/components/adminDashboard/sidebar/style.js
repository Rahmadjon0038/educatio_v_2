// AdminSidebar.style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 100%;
`;

export const SidebarTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 30px;
`;

export const SidebarList = styled.ul`
  list-style: none;
`;

export const SidebarItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  transition: 0.2s ease-in-out;
  color: rgb(20, 115, 255);
  display: flex;
  gap: 10px;
  &:hover {
    color: #38bdf8; /* Tailwind-yozilgan "sky-400" rang */
  }
`;
