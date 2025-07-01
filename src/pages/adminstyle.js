import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color:rgb(240, 247, 253);
`;

export const SidebarWrapper = styled.div`
  width: 250px;
  background-color:rgb(255, 255, 255);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 2px solid rgb(168, 160, 160);
                                                                              
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 30px;
  background-color: white;
`;
