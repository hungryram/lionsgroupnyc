import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Social from "../components/templates/Social"
import * as React from "react"
import Layout from "../components/global/Layout"
import ContactForm from "../components/ui/ContactForm"
import profile from "../data/profile.json"

export default function Contact({ data }) {
    const frontMatter = data.markdownRemark.frontmatter

    return (
        <>
            <Layout>
                <div>
                    <div className="w-full">
                        <StaticImage
                            src="../images/newyork-city.jpg"
                            className="object-cover w-full h-96"
                        />
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="flex gap-40">
                            <div className="lg:w-1/2">
                                <div className="bg-white p-10 -mt-60 z-50 relative">
                                    <div className="text-center">
                                        <h2 className="md:text-5xl text-3xl">Get in Touch</h2>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="grid grid-cols-2 items-center mb-10">
                                    <div>
                                        <h2 className="md:text-5xl text-3xl">Contact</h2>
                                    </div>
                                    <div>
                                        <Social />
                                    </div>
                                </div>
                                <div>
                                    {profile.contact_information.address ?
                                        <div class="flex gap-10">

                                            <>
                                                <div className="flex-none w-20">Adrress</div>
                                                <div className="flex-1">
                                                    <span>{profile.contact_information.address} <br />{profile.contact_information.city} {profile.contact_information.state} {profile.contact_information.zip_code}</span>
                                                </div>
                                            </>
                                        </div>
                                        :
                                        <></>

                                    }
                                    {profile.contact_information.email ?
                                        <div class="flex gap-10">

                                            <>
                                                <div className="flex-none w-20">Email</div>
                                                <div className="flex-1">
                                                    <span><a href={`mailto: ${profile.contact_information.email}`}>{profile.contact_information.email}</a></span>
                                                </div>
                                            </>
                                        </div>
                                        :
                                        <></>

                                    }
                                    {profile.contact_information.phone ?
                                        <div class="flex gap-10">

                                            <>
                                                <div className="flex-none w-20">Phone</div>
                                                <div className="flex-1">
                                                    <span><a href={`tel: ${profile.contact_information.phone}`}>{profile.contact_information.phone}</a></span>
                                                </div>
                                            </>
                                        </div>
                                        :
                                        <></>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.2094089551447!2d-73.72535868459298!3d40.77941017932464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c289bfcbf3febb%3A0x2b00b89d57c3559c!2sLions%20Group!5e0!3m2!1sen!2sus!4v1656047334763!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[32rem] grayscale"></iframe>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    markdownRemark {
      frontmatter {
        title
        search_engine_optimization {
          meta_description
          title_tag
        }
      }
    }
  }
  
`