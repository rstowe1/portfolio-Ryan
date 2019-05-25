// import React from 'react';
// import Link from "next/link";
//
// class Header extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//
{/*<Link href='/'>*/}
{/*  <a>Home</a>*/}
{/*</Link>*/}
//
//         <Link href='/about'>
//           <a>About</a>
//         </Link>
//
//         <Link href='/portfolios'>
//           <a>Portfolios</a>
//         </Link>
//
//         <Link href='/blog'>
//           <a>Blog</a>
//         </Link>
//
//         <Link href='/cv'>
//           <a>Cv</a>
//         </Link>
//
//         <style jsx>{`
//               a {
//              font-size: 20px;
//              };
//              .customClass {
//              color: red;
//              }
//               `}</style>
//       </React.Fragment>
//     )
//   }
//
// }
//
// export default Header;


import React from 'react';
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const BsNavLink = (props) =>{
  const {route, title} =props;
  return(
  <Link href={route}>
    <a className="nav-link">{title}</a>
  </Link>
  )
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Ryan W Stowe</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/portfolios" title="Portfolios"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/blog" title="Blogs"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/cv" title="CV"/>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
