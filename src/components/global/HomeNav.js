import * as React from "react"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, StaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image"

export default function Navbar() {

    const [active, setActive] = useState(true);

    return (
        <StaticQuery
            query={graphql`
            {
                appearance: dataJson(_type: {eq: "appearance"}) {
                    branding {
                        logo {
                            childImageSharp {
                                gatsbyImageData(placeholder: NONE, quality: 100, width:200)
                            }
                        }
                    }
                }
                }
            `
            }
            render={data => (
                <>
                    <nav className="md:flex items-center justify-center py-5 bg-transparent top-0 z-50 left-0 right-0 text-white absolute md:visible hidden">
                        <ul className="flex items-center">
                            <li className="inline-block mx-5 font-light">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/availability">Availability</Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/portfolio/">Portfolio</Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/">
                                <GatsbyImage
                                    image={data.appearance.branding.logo.childImageSharp.gatsbyImageData}
                                />
                                </Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                            <Link to="/coming-soon">Coming Soon</Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/about/">About</Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="z-50 relative md:hidden">
                        <div className="nav">

                        </div>
                    </div>

                </>
            )}
        />
    )
}