import { graphql } from "gatsby"
import * as React from "react"
import Footer from "../components/global/Footer"
import Navbar from "../components/global/Navbar"
import HomeNav from "../components/global/HomeNav"
import Banner from "../components/templates/Banner"
import Featured from "../components/templates/Featured"
import Hero from "../components/templates/Hero"
import Homeform from "../components/templates/Homeform"
import Intro from "../components/templates/Intro"

export default function Index({ data }) {
  return (
    <>
        <HomeNav />
       {data.file.childMarkdownRemark.frontmatter.sections.map((section, i) => {
          if(section.type === 'hero') {
            return (
              <Hero
                backgroundImage={section.background_image}
                heading={section.heading}
                body={section.body}
                _key={i}
              />
            )
          }

          if(section.type === 'intro') {
            return (
              <Intro
                heading={section.heading}
                body={section.body}
                _key={i}
              />
            )
          }

          if(section.type === 'featured') {
            return (
              <Featured
                heading={section.heading}
                body={section.body}
                _key={i}
                altTag={section.image_alt_tag}
                backgroundImage={section.background_image}
              />
            )
          }

          if(section.type === 'banner') {
            return (
              <Banner
                heading={section.heading}
                body={section.body}
                backgroundImage={section.background_image}
                altTag={section.image_alt_tag}
                link={section.button_link}
                label={section.button_label}
              />
            )
          }

          if(section.type === 'homeform') {
            return (
              <Homeform
                backgroundImage={section.background_image}
                heading={section.heading}
                body={section.body}
                altTag={section.image_alt_tag}
              />
            )
          }
       })}
       <Footer />
    </>
  )
}

export const query = graphql`
query {
  file(sourceInstanceName: {eq: "main"}) {
    childMarkdownRemark {
      frontmatter {
        sections {
          background_image {
            childImageSharp {
              gatsbyImageData(placeholder: NONE, quality: 100)
            }
          }
          type
          heading
          body
          image_alt_tag
          button_link
          button_label
        }
      }
    }
  }
}

`