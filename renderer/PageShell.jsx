import React from 'react';
import PropTypes from 'prop-types';
import './PageShell.css';
import { PageContextProvider } from './usePageContext';
import { Link } from './Link';
import { childrenPropType } from './PropTypeValues';

export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header></Header>
        <Layout>
          
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

Layout.propTypes = {
  children: childrenPropType,
};
function Layout({ children }) {
  return <div>{children}</div>;
}

function Header({ children }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        borderBottom: "2px solid #2c2c2c",
        padding: "20px",
      }}
    >
      <strong style={{ color: 'white' }}>NextJs</strong>
      <nav style={{ display: "flex", gap: "30px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
      </nav>
      {children}
    </header>
  );
}

Content.propTypes = {
  children: childrenPropType,
};
function Content({ children }) {
  return (
    <div
      // style={{
      //   padding: 20,
      //   paddingBottom: 50,
      //   borderLeft: '2px solid #eee',
      //   minHeight: '100vh',
      // }}
    >
      {children}
    </div>
  );
}
