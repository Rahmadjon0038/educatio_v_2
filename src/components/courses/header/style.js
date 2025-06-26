import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 160px 100px;
  background-color: #f9f9fc;

  .section-title {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    color: #222;
    margin-bottom: 50px;
    color: rgb(129, 35, 51);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  padding: 10px;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Content = styled.div`

  .tags {
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .category {
    background-color: #eef2f7;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 10px;
    color: #666;
  }

  .rating {
    font-size: 12px;
    color: #999;
    margin-top: 14px;
  }
`;

export const Badge = styled.span`
  background-color: #f3f4f6;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 12px;
  color: #333;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  color: #111;
`;

export const Teacher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  span {
    font-size: 14px;
    color: #333;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  del {
    color: #aaa;
    font-size: 14px;
  }

  strong {
    color: #e74c3c;
    font-size: 18px;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  align-items: center;
  color: #666;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: center;
`;

export const FilterButton = styled.button`
  background-color: ${({ active }) => (active ? "rgb(129, 35, 51)" : "rgb(238, 232, 232)")};
  color: ${({ active }) => (active ? "#fff" : "rgb(129, 35, 51)")};
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(129, 35, 51);
    color: #fff;
  }
`;