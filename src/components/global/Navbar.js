import * as React from "react"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, StaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

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
                    <nav className="flex items-center justify-center py-2 bg-white text-black">
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
                                <StaticImage
                                    src="../../images/lions-group-logo-dark.png"
                                    width="200"
                                />
                                </Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/about/">About</Link>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <a href="https://lionsgroup.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button" target="_blank">Pay Rent</a>
                            </li>
                            <li className="inline-block mx-5 font-light">
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="z-50 relative md:hidden">
                        <div className="nav">
                            <div id="toggle" onClick={() => setActive(!active)}>
                                {active ? "open" : "close"}
                            </div>
                            <div className={active ? "nav-menu" : "nav-menu-active"}>
                                <ul style={{ listStyle: "none", padding: "0" }}>
                                    <li>Link 1</li>
                                    <li>Link 2</li>
                                    <li>Link 3</li>
                                    <li>Link 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </>
            )}
        />
    )
}