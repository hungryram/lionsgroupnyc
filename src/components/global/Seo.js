import * as React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ children, metaDescription, titleTag, pageImage, pageUrl, pageKeywords }) => {
  
    return (
  
      <React.Fragment>
  
        <Helmet
          defaultTitle={siteData.title}
          htmlAttributes={{ lang: 'en' }}
          titleTemplate={`${siteData.title} | ${titleTag}`}
        >
  
          <title>{titleTag || metaDescription}</title>
  
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={pageKeywords} />
  
          {/* FB Meta Tags */}
  
          <meta property="og:title" content={titleTag}/>
          <meta property="og:description" content={metaDescription}/>
          <meta property="og:image" content={pageImage} />
          <meta property="og:url" content={pageUrl} />
  
          {/* Twitter Meta Tags */}
  
          <meta name="twitter:title" content={titleTag}/>
          <meta name="twitter:description" content={metaDescription}/>
          <meta name="twitter:image" content={pageImage}/>
          <meta name="twitter:card" content="summary_large_image"/>
  
          {children}
          
        </Helmet>
        
      </React.Fragment>
  
    );
  }
  
  export default Seo;