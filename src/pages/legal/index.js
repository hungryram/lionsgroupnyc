import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function LegalIndex({ data }) {

    const sanity = data.allSanityLegal

    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <ul className="text-center">
                        {sanity.nodes.map((pages) => {
                            return (
                                <li>
                                    <Link to={"/legal/" + pages.slug.current}>{pages.title}</Link>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityLegal {
      nodes {
        _rawContent
        title
        slug {
          current
        }
      }
    }
  }
`