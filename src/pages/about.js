import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/global/Layout"
import Showdown from "showdown"
import PrimaryButton from "../components/ui/PrimaryButton"
import Seo from "../components/global/Seo"

export default function About({ data }) {
    const converter = new Showdown.Converter()
    return (
        <>
            <Layout>
                <Seo 
                    title={data.markdownRemark.frontmatter.search_engine_optimization.title_tag}
                    description={data.markdownRemark.frontmatter.search_engine_optimization.meta_description}
                />
                <div>
                    <div className="w-full">
                        <StaticImage
                            src="../images/newyork-city-blue.jpg"
                            className="object-cover w-full h-96"
                            alt="About Lions Group NY"
                        />
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="md:flex flex-none gap-20">
                            <div className="lg:w-1/2">
                                <div className="bg-white p-2 -mt-60 z-50 relative">
                                    <GatsbyImage
                                        image={data.markdownRemark.frontmatter.featured_image.childImageSharp.gatsbyImageData}
                                        alt="tall building in New York"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div>
                                    <div className="md:w-full content">
                                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.rawMarkdownBody) }} />
                                    </div>
                                    <div className="my-10">
                                        <PrimaryButton
                                            link="/contact/"
                                            label="Contact Us"
                                            className="primary-button"
                                        />
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "/content/pages/about/"}) {
      frontmatter {
        title
        featured_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 50)
          }
        }
        search_engine_optimization {
            title_tag
            meta_description
        }
      }
      rawMarkdownBody
    }
  }
  
`