import { Outlet, Link } from "react-router";

import CrownLogo  from "../../assets/crown.svg?react"

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo  />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Navigation