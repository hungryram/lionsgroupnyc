import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import PortfolioCard from "../../components/templates/PortfolioCard"

export default function PortfolioIndex({ data }) {
    const frontMatter = data.allPortfolio.nodes

    return (
        <>
        <Layout>
            <div className="py-10">
                <div className="container">
                    <h1 className="heading">Our Portfolio</h1>
                </div>
            </div>
            <div className="section" style={{
                backgroundColor: '#FAFAFF'
            }}>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {frontMatter.map((node) => {
                            return (
                                <PortfolioCard
                                    image={node.frontmatter.image}
                                    title={node.frontmatter.title}
                                    link={"/portfolio" + node.slug}
                                    _key={node.id}
                                    address={node.frontmatter.address}
                                    city={node.frontmatter.city}
                                    state={node.frontmatter.state}
                                    zipCode={node.frontmatter.zip_code}
                                />
                            )
                        }) }
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export const query = graphql`
{
    allPortfolio {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 30)
            }
          }
          city
          title
          address
          zip_code
          details {
            built_in
            floors
            units
          }
        }
        slug
        id
      }
    }
  }
`