import { StaticQuery } from "gatsby"
import * as React from "react"
import { graphql, Link } from "gatsby"
import footer from '../../data/footer.json'
import profile from '../../data/profile.json'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Footer() {
    return (
        <StaticQuery
            query={graphql`
            {
                sanityProfileSettings {
                  contact_information {
                    phone_number
                    email
                  }
                  address {
                    zip_code
                    state
                    city
                    address
                  }
                  social {
                    youtube
                    yelp
                    twitter
                    tiktok
                    reddit
                    pinterest
                    linkedin
                    instagram
                    facebook
                  }
                }
                sanityAppearances {
                  footer {
                    quickLinks {
                      externalUrl
                      internalLink {
                        ... on SanityAuthor {
                          id
                          name
                          slug {
                            current
                          }
                        }
                        ... on SanityLegal {
                          id
                          slug {
                            current
                          }
                        }
                      }
                      text
                    }
                    footerLogo {
                      asset {
                        gatsbyImageData(placeholder: BLURRED, width: 200)
                      }
                    }
                  }
                }
              }
              
            `}
            render={data => (
                <>
                    <footer style={{
                        backgroundColor: '#0E0F3C'
                    }}>
                        <div className="container relative w-full max-h-fit overflow-hidden text-white">
                            <div className="relative w-full py-2 z-20">
                                <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto lg:py-12 px-4 text-secondary">
                                    <div className="flex flex-col lg:w-1/4 my-auto p-4 text-center">
                                        <Link to="/">
                                            <GatsbyImage
                                                image={data.sanityAppearances.footer.footerLogo.asset.gatsbyImageData}
                                                alt="Lions Group Logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col md:mx-auto text-textLight">
                                        <h2 className="text-xl tracking-tight">Links</h2>
                                        <ul className="mb-5">
                                            {data.sanityAppearances.footer.quickLinks.map((link, i) => {
                                                return (
                                                    <li key={i} className="my-2" >
                                                        <Link
                                                            className="mx-2 inline-block"
                                                            to={(link.internalLink?._type === "post" && `/blog/${link.internalLink.slug.current}`) || (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug.current}`) || (link.internalLink?._type === "author" && `/authors/${link.internalLink.slug.current}`) || (link.externalUrl && `${link.externalUrl}`)}
                                                            aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                            target={link?.externalUrl && "_blank"}
                                                        >
                                                            {link.internalLink?.name ?? link.internalLink?.title ?? link.text }

                                                        </Link>
                                                    </li>                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col md:mx-auto text-textLight">
                                        <h2 className="text-xl tracking-tight">Follow us</h2>
                                        <ul className="mb-5">
                                            {data.sanityProfileSettings.social.facebook && <li className="my-2"><a href={data.sanityProfileSettings.social.facebook} target="_blank">Facebook</a></li>}
                                            {data.sanityProfileSettings.social.instagram && <li className="my-2"><a href={data.sanityProfileSettings.social.instagram} target="_blank">Instagram</a></li>}
                                            {data.sanityProfileSettings.social.youtube && <li className="my-2"><a href={data.sanityProfileSettings.social.youtube} target="_blank">Youtube</a></li>}
                                            {data.sanityProfileSettings.social.pinterest && <li className="my-2"><a href={data.sanityProfileSettings.social.pinterest} target="_blank">Pinterest</a></li>}
                                            {data.sanityProfileSettings.social.linkedin && <li className="my-2"><a href={data.sanityProfileSettings.social.linkedin} target="_blank">Linkedin</a></li>}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col md:mx-auto text-textLight lg:items-start">
                                        <h2 className="text-xl tracking-tight">Contact</h2>
                                        <div className="mb-5">
                                            <div className="flex flex-row items-center my-4" >
                                                <div className="flex flex-col">
                                                    <span className="text-sm">Call Us</span>
                                                    <a className="hover:text-accent transition-colors" href={`tel:+${data.sanityProfileSettings.contact_information.phone_number}`}>{data.sanityProfileSettings.contact_information.phone_number}</a>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center my-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm">Email Us</span>
                                                    <a className="hover:text-accent transition-colors" href={`mailTo:${data.sanityProfileSettings.contact_information.email}`}>{data.sanityProfileSettings.contact_information.email}</a>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center my-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm">Our Office</span>
                                                    <a
                                                        className="hover:text-accent transition-colors"
                                                        href={`https://www.google.com/maps/place/${data.sanityProfileSettings.address.address.replaceAll(' ', '+')},+${data.sanityProfileSettings.address.city},+${data.sanityProfileSettings.address.state},+${data.sanityProfileSettings.address.zip_code}`}
                                                        target="blank"
                                                    >
                                                        {data.sanityProfileSettings.address.address}, {data.sanityProfileSettings.address.city}, {data.sanityProfileSettings.address.state} {data.sanityProfileSettings.address.zip_code}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="text-white py-5 text-sm" style={{ backgroundColor: '#0E0F3C' }}>
                        <div className="container">
                        <p className="text-sm">&copy; Copyright {new Date().getFullYear()} &middot; <a href="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram LLC</a></p>
                        </div>
                    </div>
                </>
            )}
        />
    )
}