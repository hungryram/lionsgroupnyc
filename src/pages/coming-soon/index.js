import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import PortfolioCard from "../../components/templates/PortfolioCard"

export default function ComingSoonIndex({ data }) {
    const frontMatter = data.allComingSoon.nodes

    return (
        <>
        <Layout>
            <div className="py-10">
                <div className="container">
                    <h1 className="heading">Coming Soon</h1>
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
                                    link={"/coming-soon" + node.slug}
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
query {
    allComingSoon {
      nodes {
        slug
        id
        frontmatter {
          address
          city
          details {
            floors
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`