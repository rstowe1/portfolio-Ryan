import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const {className, children, isAuthenticated, user} = props;
  const headerType = props.headerType || 'default';

  return (
    <React.Fragment>
      <Head>
        <title>Ryan W. Stowe</title>
        <script src="https://kit.fontawesome.com/351a84dfa1.js" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
      </Head>
      <div className="layout-container">
        {/*{headerType === 'index' && <Header className='port-nav-index' isAuthenticated={isAuthenticated} user={user}/>}*/}
        {/*{headerType === 'default' && <Header className='port-nav-default' isAuthenticated={isAuthenticated} user={user}/>}*/}

        <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
};

export default BaseLayout

