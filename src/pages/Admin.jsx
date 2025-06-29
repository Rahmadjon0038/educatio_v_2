import React from 'react';
import AdminSidebar from '../components/adminDashboard/sidebar/AdminSidebar';
import { Outlet } from 'react-router-dom';
import { Container, SidebarWrapper, ContentWrapper } from './adminstyle';

function Admin() {
  return (
    <Container>
      <SidebarWrapper>
        <AdminSidebar />
      </SidebarWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
}

export default Admin;
