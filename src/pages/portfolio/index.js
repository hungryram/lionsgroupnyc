import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import PortfolioCard from "../../components/templates/PortfolioCard"
import Card from "../../components/templates/Card"
import Seo from "../../components/global/Seo"

export default function PortfolioIndex({ data }) {
    const frontMatter = data.allSanityPortfolio.nodes

    return (
        <>
        <Layout>
          <Seo
            title="Our Portfolio | Lions Group"
            description="View our portfolio of properties here. Have a question about something you see? Contact us today!"
          />
            <div className="md:py-10 pt-24 pb-10 main-bg">
                <div className="container">
                    <h1 className="heading sm:text-black text-white">Our Portfolio</h1>
                </div>
            </div>
            <div className="section" style={{
                backgroundColor: '#FAFAFF'
            }}>
                <div className="container">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                        {frontMatter.map((node) => {
                            return (
                                <PortfolioCard
                                    image={node?.mainImage?.asset.gatsbyImageData}
                                    title={node.title}
                                    link={node.slug.current}
                                    _key={node._id}
                                    address={node.address}
                                    status={node.comingSoon}
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
  allSanityPortfolio(sort: {fields: comingSoon, order: ASC}) {
    nodes {
      slug {
        current
      }
      title
      address
      altTag
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      comingSoon
      _id
    }
  }
}


`