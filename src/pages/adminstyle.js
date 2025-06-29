import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color:rgb(240, 247, 253);
`;

// Sidebar joyi
export const SidebarWrapper = styled.div`
  width: 250px;
  background-color:rgb(255, 255, 255);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;

// Sahifa kontent joyi (Outlet chiqadigan joy)
export const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 30px;
`;
