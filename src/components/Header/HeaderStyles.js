import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
  }
`;
export const Span = styled.span`
  font-size: 2rem;
`;
// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcon = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;
