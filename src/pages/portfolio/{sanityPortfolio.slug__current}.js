import { PortableText } from "@portabletext/react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"

export default function Portfolio({ data }) {

    const frontMatter = data.sanityPortfolio
    return (
        <>
            <Layout>
                <Seo
                    title={frontMatter?.seo?.title_tag}
                    description={frontMatter?.seo?.meta_description}
                />
            <div className="md:py-10 pt-24 pb-10 main-bg">
                <div className="container">
                    <h1 className="heading sm:text-black text-white">{frontMatter.title}</h1>
                </div>
            </div>
                <div className="section">
                    <div className="container">
                        <div className="md:flex gap-10">
                            <div className="md:w-3/5">
                                {frontMatter.mainImage ?
                                    <GatsbyImage
                                        image={frontMatter.mainImage.asset.gatsbyImageData}
                                        className="mb-20"
                                        alt={frontMatter.title}
                                    />
                                    :
                                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="empty avatar" className="mb-20" />

                                }
                                <div className="content">
                                    <h1 className="text-5xl">{frontMatter?.title}</h1>
                                    <p className="leading-6">{frontMatter?.address}</p>
                                    <PortableText
                                        value={frontMatter?._rawBody}
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/5">
                                <div className="bg-gray-100">
                                    <div className="p-10">
                                        <h3 className="text-xl mt-0">Details</h3>
                                        {frontMatter?.units ? <span className="ml-2">{frontMatter.units} <span className="mr-2">units</span> &bull; </span> : <></>}
                                        {frontMatter?.floors ? <span className="ml-2">{frontMatter.floors} <span className="mr-2">floors</span> &bull; </span> : <></>}
                                        {frontMatter?.built_in ? <span className="ml-2"><span>built in</span> {frontMatter.built_in} </span> : <></>}
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
    sanityPortfolio(id: {eq: $id}) {
      seo {
        meta_description
        title_tag
      }
      units
      title
      _rawBody
      comingSoon
      floors
      builtIn
      address
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
  
`