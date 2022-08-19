import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { BiCaretDown } from "@react-icons/all-files/bi/BiCaretDown"
import { IconContext } from "@react-icons/all-files";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu"
import { MdClose } from "@react-icons/all-files/md/MdClose"

export default function Navbar() {


    const [dropdownActive, setDropdownActive] = useState(null);
    const [openMobileNav, setOpenMobileNav] = useState(false);


    const [scrollPosition, setScrollPosition] = useState(0);
    const [top, setTop] = useState(true)
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (scrollPosition === 0) {
        setTop(true)
      } else if (scrollPosition > 10) {
        setTop(false)
      } else if (scrollPosition < 10) {
        setTop(true)
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    return (
        <StaticQuery
            query={graphql`
            {
                sanityAppearances {
                  header {
                    rightNav {
                      id
                      items {
                        text
                        externalUrl
                        internalLink {
                          ... on SanityAuthor {
                            id
                            name
                            _type
                            slug {
                              current
                            }
                          }
                          ... on SanityLegal {
                            id
                            slug {
                              current
                            }
                            _type
                          }
                        }
                      }
                    }
                    leftNav {
                      items {
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
                          ... on SanityPost {
                            id
                            slug {
                              current
                            }
                          }
                        }
                        text
                      }
                    }
                  }
                  branding {
                    darkLogo {
                      asset {
                        gatsbyImageData(placeholder: BLURRED, width: 200)
                      }
                    }
                    logo {
                      asset {
                        gatsbyImageData(placeholder: BLURRED, width: 200)
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
                            {data.sanityAppearances.header?.leftNav.items.map((link, i) => {
                                if (link.submenuChild?.length > 0) {
                                    return (
                                        <>
                                            <li className="relative inline-block m-2"
                                                onMouseEnter={dropdownActive === link ? () => setDropdownActive(null) : () => setDropdownActive(link)}>
                                                <Link
                                                    aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                    target={link?.externalUrl && "_blank"}
                                                    key={i}
                                                    className="cursor-pointer flex flex-row items-center"
                                                >
                                                    {link.internalLink?.name ?? link.internalLink?.title ?? link.text} <BiCaretDown className={`ml-1 text-lg ${dropdownActive === link ? "rotate-180" : "rotate-0"}`} />
                                                </Link>

                                                <ul className={`absolute bottom-0 left-0 translate-y-full bg-white p-2 border text-left w-fit ${dropdownActive === link ? "visible" : "hidden"}`}>
                                                    {link.submenuChild.map((sub) => {
                                                        return (
                                                            <>
                                                                <li className="whitespace-nowrap">
                                                                    <Link
                                                                        onClick={() => setDropdownActive(null)}
                                                                        to={(sub.internalLink?._type === "post" && `/blog/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "legal" && `/legal/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "author" && `/authors/${sub.internalLink.slug.current}`) || (sub.externalUrl && `${sub.externalUrl}`)}
                                                                        aria-label={sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}
                                                                        target={sub?.externalUrl && "_blank"}
                                                                    >{sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}</Link>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <li>
                                                <Link
                                                    className="mx-4 inline-block"
                                                    to={(link.internalLink?._type === "post" && `/blog/${link.internalLink.slug.current}`) || (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug.current}`) || (link.internalLink?._type === "author" && `/authors/${link.internalLink.slug.current}`) || (link.externalUrl && `${link.externalUrl}`)}
                                                    aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                    target={link?.externalUrl && "_blank"}
                                                >
                                                    {link.internalLink?.name ?? link.internalLink?.title ?? link.text}

                                                </Link>
                                            </li>
                                        </>
                                    )
                                }
                            })}
                            <li className="inline-block mx-5 font-light">
                                <Link to="/">
                                    <GatsbyImage
                                        image={data.sanityAppearances.branding.logo.asset.gatsbyImageData}
                                    />
                                </Link>
                            </li>
                            {data.sanityAppearances.header?.rightNav.items.map((link, i) => {
                                if (link.submenuChild?.length > 0) {
                                    return (
                                        <>
                                            <li className="relative inline-block m-2"
                                                onMouseEnter={dropdownActive === link ? () => setDropdownActive(null) : () => setDropdownActive(link)}>
                                                <Link
                                                    aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                    target={link?.externalUrl && "_blank"}
                                                    key={i}
                                                    className="cursor-pointer flex flex-row items-center"
                                                >
                                                    {link.internalLink?.name ?? link.internalLink?.title ?? link.text} <BiCaretDown className={`ml-1 text-lg ${dropdownActive === link ? "rotate-180" : "rotate-0"}`} />
                                                </Link>

                                                <ul className={`absolute bottom-0 left-0 translate-y-full bg-white p-2 border text-left w-fit ${dropdownActive === link ? "visible" : "hidden"}`}>
                                                    {link.submenuChild.map((sub) => {
                                                        return (
                                                            <>
                                                                <li className="whitespace-nowrap">
                                                                    <Link
                                                                        onClick={() => setDropdownActive(null)}
                                                                        to={(sub.internalLink?._type === "post" && `/blog/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "legal" && `/legal/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "author" && `/authors/${sub.internalLink.slug.current}`) || (sub.externalUrl && `${sub.externalUrl}`)}
                                                                        aria-label={sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}
                                                                        target={sub?.externalUrl && "_blank"}
                                                                    >{sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}</Link>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <li>
                                                <Link
                                                    className="mx-4 inline-block"
                                                    to={(link.internalLink?._type === "post" && `/blog/${link.internalLink.slug.current}`) || (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug.current}`) || (link.internalLink?._type === "author" && `/authors/${link.internalLink.slug.current}`) || (link.externalUrl && `${link.externalUrl}`)}
                                                    aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                    target={link?.externalUrl && "_blank"}
                                                >
                                                    {link.internalLink?.name ?? link.internalLink?.title ?? link.text}

                                                </Link>
                                            </li>
                                        </>
                                    )
                                }
                            })}
                        </ul>
                    </nav>

                    <div className={`z-[100] fixed left-0 right-0 md:hidden bg-transparent ${openMobileNav ? "header-show" : "header-hide"} ${top ? 'bg-transparent' : "main-bg"}`} >
                        <div className="nav p-4">
                            <div className="flex items-center">
                                <div className="flex-1 text-white">
                                    <p><a href="">Pay Rent</a></p>
                                </div>
                                <div className="flex-1">
                                    <Link to="/">
                                        {data.sanityAppearances.branding.logo ?
                                            <GatsbyImage
                                                image={data.sanityAppearances.branding.logo.asset.gatsbyImageData}
                                                alt="Lions Group logo"
                                            />
                                            :
                                            <h2 className="text-2xl">{data.sanityProfileSettings?.company_name}</h2>
                                        }
                                    </Link>
                                </div>
                                <div className="flex-1 text-right">
                                    <div id="toggle" className="cursor-pointer flex justify-end" onClick={openMobileNav ? () => setOpenMobileNav(false) : () => setOpenMobileNav(true)}>
                                        {openMobileNav ?
                                            <IconContext.Provider value={{
                                                size: '30px',
                                                color: 'white'
                                            }}>
                                                <MdClose />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{
                                                size: '30px',
                                                color: 'white'
                                            }}>
                                                <BiMenu />
                                            </IconContext.Provider>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={`bg-white z-50 h-screen ${openMobileNav ? "show" : "hide"}`} style={{
                            backgroundColor: '#0e0f3c'
                        }}>
                            <div>
                                <ul style={{ listStyle: "none", padding: "0" }} className="mt-5 items-center text-center text-white w-full">
                                    {data.sanityAppearances.header?.leftNav.items.map((link, i) => {
                                        if (link.submenuChild?.length > 0) {
                                            return (
                                                <>
                                                    <li className="relative inline-block mx-2 my-1" onClick={dropdownActive === link ? () => setDropdownActive(null) : () => setDropdownActive(link)}>
                                                        <Link
                                                            aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                            target={link?.externalUrl && "_blank"}
                                                            key={i}
                                                            className="cursor-pointer flex flex-row items-center"
                                                            onClick={() => setOpenMobileNav(false)}
                                                        >
                                                            {link.internalLink?.name ?? link.internalLink?.title ?? link.text} <BiCaretDown className={`ml-1 text-lg ${dropdownActive === link ? "rotate-180" : "rotate-0"}`} />
                                                        </Link>

                                                        <ul className={`relative w-full bg-white p-2 border text-left w-fit ${dropdownActive === link ? "visible" : "hidden"}`}>
                                                            {link.submenuChild.map((sub) => {
                                                                return (
                                                                    <>
                                                                        <li className="block mx-2 my-1">
                                                                            <Link
                                                                                onClick={() => setOpenMobileNav(false)}
                                                                                to={(sub.internalLink?._type === "post" && `/blog/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "legal" && `/legal/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "author" && `/authors/${sub.internalLink.slug.current}`) || (sub.externalUrl && `${sub.externalUrl}`)}
                                                                                aria-label={sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}
                                                                                target={sub?.externalUrl && "_blank"}
                                                                            >{sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}</Link>
                                                                        </li>
                                                                    </>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <>
                                                    <li className="border-b border-gray-600 py-4">
                                                        <Link
                                                            onClick={() => setOpenMobileNav(false)}
                                                            className="mx-2 my-1 block"
                                                            to={(link.internalLink?._type === "post" && `/blog/${link.internalLink.slug.current}`) || (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug.current}`) || (link.internalLink?._type === "author" && `/authors/${link.internalLink.slug.current}`) || (link.externalUrl && `${link.externalUrl}`)}
                                                            aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                            target={link?.externalUrl && "_blank"}
                                                        >
                                                            {link.internalLink?.name ?? link.internalLink?.title ?? link.text}

                                                        </Link>
                                                    </li>
                                                </>
                                            )
                                        }
                                    })}
                                    {data.sanityAppearances.header?.rightNav.items.map((link, i) => {
                                        if (link.submenuChild?.length > 0) {
                                            return (
                                                <>
                                                    <li className="relative inline-block mx-2 my-1" onClick={dropdownActive === link ? () => setDropdownActive(null) : () => setDropdownActive(link)}>
                                                        <Link
                                                            aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                            target={link?.externalUrl && "_blank"}
                                                            key={i}
                                                            className="cursor-pointer flex flex-row items-center"
                                                            onClick={() => setOpenMobileNav(false)}
                                                        >
                                                            {link.internalLink?.name ?? link.internalLink?.title ?? link.text} <BiCaretDown className={`ml-1 text-lg ${dropdownActive === link ? "rotate-180" : "rotate-0"}`} />
                                                        </Link>

                                                        <ul className={`relative w-full bg-white p-2 border text-left w-fit ${dropdownActive === link ? "visible" : "hidden"}`}>
                                                            {link.submenuChild.map((sub) => {
                                                                return (
                                                                    <>
                                                                        <li className="block mx-2 my-1">
                                                                            <Link
                                                                                onClick={() => setOpenMobileNav(false)}
                                                                                to={(sub.internalLink?._type === "post" && `/blog/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "legal" && `/legal/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "author" && `/authors/${sub.internalLink.slug.current}`) || (sub.externalUrl && `${sub.externalUrl}`)}
                                                                                aria-label={sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}
                                                                                target={sub?.externalUrl && "_blank"}
                                                                            >{sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}</Link>
                                                                        </li>
                                                                    </>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <>
                                                    <li className="border-b border-gray-600 py-4">
                                                        <Link
                                                            onClick={() => setOpenMobileNav(false)}
                                                            className="mx-2 my-1 block"
                                                            to={(link.internalLink?._type === "post" && `/blog/${link.internalLink.slug.current}`) || (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug.current}`) || (link.internalLink?._type === "author" && `/authors/${link.internalLink.slug.current}`) || (link.externalUrl && `${link.externalUrl}`)}
                                                            aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                                                            target={link?.externalUrl && "_blank"}
                                                        >
                                                            {link.internalLink?.name ?? link.internalLink?.title ?? link.text}

                                                        </Link>
                                                    </li>
                                                </>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>


                </>
            )}
        />
    )
}