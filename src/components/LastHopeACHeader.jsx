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
      }}
    >
      <div style={{ display: 'inline-block', verticalAlign: '0'}}>
        <img src={logo} style={{ display: 'inline', paddingRight: '1.25em', marginBottom: '0em'}} />
        <div style={{ display: 'inline-block' }}>
          <h1 style={{ display: 'inline', fontFamily: 'AustieBostKittenKlub', fontSize: '2.5em', verticalAlign: '0',}} >
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}>
              Last Hope Animal Charity
            </Link>
          </h1>
          <div style={{ display: 'block',  }}>
        
            <div style={{ display: 'inline', lineHeight: '20%', marginTop: '1.5rem'}}>
              <p style={{
                display: 'inline',
                color: 'white',
                marginRight: '0.5em'
                }}>
                Email:
                <a href='mailto:info@lasthope.ie' style={{
                  color: 'white',
                  marginLeft: '0.25em',
                }}>
                info@lasthope.ie</a>
              </p>
              <p style={{
                  display: 'inline',
                  color: 'white',
                }}> 
                Phone: 086 780 0045
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
  );
}
