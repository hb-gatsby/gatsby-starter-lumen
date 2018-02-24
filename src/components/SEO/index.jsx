import React from 'react';
import Helmet from "react-helmet";

class SEO extends React.Component {
  render() {
    const {
      postNode,
      postPath,
      config,
      postSEO
    } = this.props;
    let title;
    let description;
    let postURL;
    if (postSEO) {
      const postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description ? postMeta.description : postNode.excerpt;
      postURL = config.url + config.pathPrefix + postPath;
    } else {
      title = config.title;
      description = config.subtitle;
    }
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const image = config.shareImage !== '' ? config.url + realPrefix + config.shareImage : '';
    const blogURL = config.url + config.pathPrefix;
    const schemaOrgJSONLD = [{
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.titleAlt ? config.titleAlt : ""
    }];
    if (postSEO) {
      schemaOrgJSONLD.push([{
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image
            }
          }]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.titleAlt ? config.titleAlt : '',
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      ]);
    }
    return (
      <Helmet>
        { /* General tags */ }
        <meta name = "description" content = { description } />
        { image !== '' ? <meta name = "image" content = { image } /> : null }

        { /* Schema.org tags */ }
        <script type = "application/ld+json">
          { JSON.stringify(schemaOrgJSONLD) }
        </script>

        { /* OpenGraph tags */ }
        <meta property = "og:url" content = { postSEO ? postURL : blogURL } />
        { postSEO ? <meta property = "og:type" content = "article" /> : null }
        <meta property = "og:title" content = { title } />
        <meta property = "og:description" content = { description } />
        { image !== '' ? <meta property = "og:image" content = { image } /> : null }
        <meta property = "fb:app_id" content = { config.facebookAppID ? config.facebookAppID : '' } />

        { /* Twitter Card tags */ }
        <meta name = "twitter:card" content = "summary_large_image" / >
        <meta name = "twitter:creator" content = { config.author.twitter !== '#' ? config.author.twitter : '' } />
        <meta name = "twitter:title" content = { title } />
        <meta name = "twitter:description" content = { description } />
        { image !== '' ? <meta name = "twitter:image" content = { image } /> : null }
      </Helmet>
    );
  }
}
export default SEO;
