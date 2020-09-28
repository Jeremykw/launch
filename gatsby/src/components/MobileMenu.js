import React, { Component } from 'react';
import styled from 'styled-components';
import menuHamburger from '../images/mobile/menuHamburger.svg';
import closeButton from '../images/mobile/closeButton.svg';
import Nav from './Nav';

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 770px) {
    display: grid;
    grid-template-rows: 30px;
    justify-content: end;
    padding-right: 30px;
    padding-top: 30px;
  }
`;

const Hamburger = styled.div`
  /* grid-auto-rows: 40px; */
  .hamburger {
  }
  .hamburger.show-menu {
    visibility: hidden;
  }
  .hamburger.hide-menu {
    visibility: visible;
    cursor: pointer;
    background: url(${menuHamburger}) no-repeat;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
  }
  /* Close button */
  .close.show-menu {
    position: absolute;
    visibility: visible;
    cursor: pointer;
    background: url(${closeButton}) no-repeat;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    z-index: 2;
  }
  .close.hide-menu {
    visibility: hidden;
  }
`;
const Menu = styled.div`
  position: absolute;
  background-color: var(--blue);
  top: 0vh;
  right: 0vw;
  width: 40vw;
  height: 100vh;
  padding: 90px 10px;
  z-index: 1;
  transition: opacity 0.5s ease;

  &.show-menu {
    display: grid;
    visibility: visible;
    grid-template-rows: repeat(4, 60px);
    grid-gap: 10px;
    font-size: 3rem;
    opacity: 1;
  }
  &.hide-menu {
    opacity: 0;
  }
  @media (max-width: 770px) {
    & {
      visibility: hidden;
    }
  }
  @media (max-width: 450px) {
    & {
      width: 70vw;
    }
  }
`;

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <>
        <HamburgerWrapper>
          <Hamburger>
            <button
              className={
                this.state.showMenu
                  ? 'show-menu hamburger'
                  : 'hide-menu hamburger'
              }
              onClick={this.toggleMenu}
              aria-label="Menu Hamburger"
            />
            <button
              className={
                this.state.showMenu ? 'show-menu close' : 'hide-menu close'
              }
              onClick={this.toggleMenu}
              aria-label="Close Button"
            />
          </Hamburger>
        </HamburgerWrapper>
        <Menu className={this.state.showMenu ? 'show-menu' : 'hide-menu'}>
          <Nav />
        </Menu>
      </>
    );
  }
}

export default MobileMenu;
