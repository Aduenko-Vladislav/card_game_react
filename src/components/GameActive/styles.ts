import styled from "styled-components";

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-height: 77px;
  margin: 77px 0 56px;

  background: rgba(255, 255, 255, 0.71) 0% 0% no-repeat padding-box;
  border-radius: 39px;
`;

export const WrapperUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 45px;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 259px;
  width: 100%;
`;
