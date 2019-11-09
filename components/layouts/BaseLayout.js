import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const {className, children, isAuthenticated, user, isSiteOwner, cannonical} = props;
    const headerType = props.headerType || 'default';
    const title = props.title || 'Default Page';
  


  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>

        <meta name="description" content="My name is Ryan W. Stowe and I am an experienced software engineer and freelance developer. I have a Bachelors' degree in Accounting, a Certification in Web Development and several years of experience working on a wide range of technologies and projects from General Ledger Accounting to web applications in React. Throughout my career, I have acquired advanced technical knowledge and the ability to use my unique skill set to create business software to make general tasks more simple as well as specializing in process improvement." />
        <meta name="keywords" content="blog, Stowe portfolio, Stowe developer, Stowe freelancing, Stowe programming, Ryan portfolio, Ryan developer, Ryan freelancing, Ryan programming"/>

        <meta property='og:title' content='Ryan W. Stowe | Accountant, Developer, Technology Enthusiast'/>
        <meta property='og:locale' content='en_US'/>
        <meta property='og:url' content={`${process.env.BASE_URL}`}/>
        <meta property='og:type' content='website'/>
        <meta property='og:description' content="My name is Ryan W. Stowe and I am an experienced software engineer and freelance developer. I have a Bachelors degree in Accounting, a Certification in Web Development and several years of experience working on a wide range of technologies and projects from General Ledger Accounting to web applications in React. Throughout my career, I have acquired advanced technical knowledge and the ability to use my unique skill set to create business software to make general tasks more simple as well as specializing in process improvement."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
        {cannonical && <Link rel='cannoncical' href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel='icon' type='image/ico' href='/static/favicon.ico'/>

        <script src="https://kit.fontawesome.com/351a84dfa1.js" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
      </Head>
      <div className="layout-container">
        {/*{headerType === 'index' && <Header className='port-nav-index' isAuthenticated={isAuthenticated} user={user}/>}*/}
        {/*{headerType === 'default' && <Header className='port-nav-default' isAuthenticated={isAuthenticated} user={user}/>}*/}

        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
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

