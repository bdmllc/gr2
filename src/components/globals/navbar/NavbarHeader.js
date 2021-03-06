import React, { Component } from 'react'
import {Link} from 'gatsby';
import logo from '../../../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils';

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeadWrapper>
      <Link to="/">
        <img src={logo} alt="company name"/>
      </Link>

      <FaAlignRight 
        className="toggle-icon" 
        onClick={() => {
        handleNavbar()
      }}
      />
      </HeadWrapper>
    )
  }
}

const HeadWrapper = styled.div`
  padding: .4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon{
    color: ${styles.colors.mainYellow2};
    font-size: 1.7rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
