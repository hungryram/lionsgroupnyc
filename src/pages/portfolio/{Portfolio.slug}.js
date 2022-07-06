import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function Portfolio({ data }) {

    const frontMatter = data.portfolio.frontmatter
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <div className="flex gap-10">
                            <div className="md:w-3/5">
                                <GatsbyImage
                                    image={frontMatter.image.childImageSharp.gatsbyImageData}
                                    className="mb-20"
                                    alt={frontMatter.title}
                                />
                                <div className="content">
                                    <h1 className="text-5xl">{frontMatter.title}</h1>
                                    <p className="leading-6">{frontMatter.address} <br/> {frontMatter.city} {frontMatter.state} {frontMatter.zip_code}</p>
                                    <div className="mt-10" dangerouslySetInnerHTML={{ __html: data.portfolio.rawMarkdownBody }} />
                                </div>
                            </div>
                            <div className="md:w-2/5">
                                <div className="bg-gray-100">
                                    <div className="p-10">
                                        <h3 className="text-xl mt-0">Details</h3>
                                        { frontMatter.details.units ? <span className="ml-2">{frontMatter.details.units} <span className="mr-2">units</span> &bull; </span> : <></>}
                                        { frontMatter.details.floors ? <span className="ml-2">{frontMatter.details.floors} <span className="mr-2">floors</span> &bull; </span> : <></>}
                                        { frontMatter.details.built_in ? <span className="ml-2"><span>built in</span> {frontMatter.details.built_in} </span> : <></>}
                                        <div className="mt-10 text-center">
                                        <Link to="/contact/" key="_contact" className="border border-black py-4 px-10">Contact Us</Link>
                                        </div>
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
query ($id: String) {
    portfolio(id: {eq: $id}) {
      frontmatter {
        address
        city
        state
        title
        zip_code
        details {
          built_in
          floors
          units
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 50)
          }
        }
      }
      rawMarkdownBody
    }
  }
  
`