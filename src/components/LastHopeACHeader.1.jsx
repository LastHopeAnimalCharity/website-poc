import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import logo from "../images/lhac_logo.png";

export default function LastHopeACHeader(props) {

  return (
    <div
    style={{
      background: 'purple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '-0.6em auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem 0.25rem',
        textAlign: 'center',
        height: '100%',
      }}
    >
      <div style={{ height: '110px', lineHeight: 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} style={{ display: 'inline-block', paddingRight: '1.25em', marginBottom: '0em'}} />
        <div style={{ display: 'inline-block'}}>
          <h1 style={{ fontFamily: 'AustieBostKittenKlub', fontSize: '3em' }} >
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Last Hope Animal Charity
            </Link>
          </h1>
        </div>
        <div>
          <p style={{
              display: 'inline-block',
              color: 'white',
              marginRight: '0.5em',
              marginBottom: '0rem',
            }}
            >
            Email:
            <a href='mailto:info@lasthope.ie'
              style={{
                color: 'white',
                marginLeft: '0.25em',
                marginBottom: '0rem',
              }}
              >info@lasthope.ie</a>
          </p>
          <p style={{
                display: 'inline-block',
                color: 'white',
              }}
              > Phone:
            <a href='phone:info@lasthope.ie'
              style={{
                color: 'white',
                marginLeft: '0.25em',
              }}
              >
                086 780 0045
              </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
