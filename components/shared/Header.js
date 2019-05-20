import React from 'react';
import Link from "next/link";
import '../../styles/main.scss'

class Header extends React.Component {
  render() {

    const title = this.props.title;

    return (
      <React.Fragment>

        <p> {title} </p>
        {this.props.children}
        <p className='customClass'>I am a styled "p" element </p>
        <p className='customClassFromFile'>I am a styled "p" element </p>

        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/about'>
          <a>About</a>
        </Link>

        <Link href='/portfolios'>
          <a>Portfolios</a>
        </Link>

        <Link href='/blog'>
          <a>Blog</a>
        </Link>

        <Link href='/cv'>
          <a>Cv</a>
        </Link>

        <style jsx>{`
              a {
             font-size: 20px;
             };
             .customClass {
             color: red;
             }
              `}</style>
      </React.Fragment>
    )
  }

}

export default Header;


