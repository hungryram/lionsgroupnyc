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
                appearance: dataJson(_type: {eq: "appearance"}) {
                    branding {
                        logo {
                            childImageSharp {
                                gatsbyImageData(placeholder: NONE, quality: 100)
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
                                    <div className="flex flex-col lg:w-1/4 my-auto p-4">
                                    <Link to="/">
                                        <GatsbyImage
                                            image={data.appearance.branding.logo.childImageSharp.gatsbyImageData}
                                            alt="test"
                                        />
                                    </Link>
                                    </div>
                                    <div className="flex flex-col md:mx-auto text-textLight">
                                        <h2 className="text-xl tracking-tight">Links</h2>
                                        <ul className="my-5">
                                            {footer.about_us?.map((link, i) => {
                                                return <li key={i} className="my-2" ><Link to={link.link} className="text-sm hover:text-accent transition-colors">{link.name}</Link></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col md:mx-auto text-textLight">
                                        <h2 className="text-xl tracking-tight">Follow us</h2>
                                        <ul className="my-5">
                                            {footer.quick_links?.map((link, i) => {
                                                return <li key={i} className="my-2" ><Link to={link.link} className="text-sm hover:text-accent transition-colors">{link.name}</Link></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col md:mx-auto text-textLight lg:items-start">
                                        <h2 className="text-xl tracking-tight">Contact</h2>
                                        <div className="my-5">
                                            <div className="flex flex-row items-center my-4" >
                                                <a href={`tel:+${profile.contact_information.phone}`} className="rounded-full p-3 bg-accent hover:bg-textLight text-textLight hover:text-accent mr-3  transition-colors">
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm">Call Us</span>
                                                    <a className="hover:text-accent transition-colors" href={`tel:+${profile.contact_information.phone}`}>{profile.contact_information.phone}</a>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center my-4">
                                                <a href={`mailTo:${profile.contact_information.email}`} className="rounded-full p-3 bg-accent hover:bg-textLight text-textLight hover:text-accent mr-3  transition-colors">
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm">Email Us</span>
                                                    <a className="hover:text-accent transition-colors" href={`mailTo:${profile.contact_information.email}`}>{profile.contact_information.email}</a>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center my-4">
                                                <a
                                                    className="rounded-full p-3 bg-accent hover:bg-textLight text-textLight hover:text-accent mr-3 transition-colors"
                                                    href={`https://www.google.com/maps/place/${profile.contact_information.address.replaceAll(' ', '+')},+${profile.contact_information.city},+${profile.contact_information.state},+${profile.contact_information.zip_code}`}
                                                    target="blank"
                                                >
                                                </a>
                                                <div className="flex flex-col">
                                                    <span className="text-sm">Our Office</span>
                                                    <a
                                                        className="hover:text-accent transition-colors"
                                                        href={`https://www.google.com/maps/place/${profile.contact_information.address.replaceAll(' ', '+')},+${profile.contact_information.city},+${profile.contact_information.state},+${profile.contact_information.zip_code}`}
                                                        target="blank"
                                                    >
                                                        {profile.contact_information.address}, {profile.contact_information.city}, {profile.contact_information.state} {profile.contact_information.zip_code}
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
                            <p>2022 Website built by Hungry Ram</p>
                            </div>
                        </div>
                </>
            )}
        />
    )
}