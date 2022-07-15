import * as React from "react"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, StaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"

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

                    <div className="z-50 absolute left-0 right-0  md:hidden" style={{
                        borderBottom: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <div className="nav py-4">
                            <div className="flex text-center items-center">
                                <div className="flex-1 text-white">
                                    <span>Pay rent</span>
                                </div>
                                <div className="flex-1">
                                    <Link to="/">
                                        <GatsbyImage
                                            image={data.appearance.branding.logo.childImageSharp.gatsbyImageData}
                                        />
                                    </Link>
                                </div>
                                <div className="flex-1">
                                    <div id="toggle" onClick={() => setActive(!active)}>
                                        {active ?
                                            <>
                                            <AiOutlineMenu />
                                            </>
                                            :
                                            <>
                                            </>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ul style={{ listStyle: "none", padding: "0" }}
                                    className={active ? "hidden" : "block"}>
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