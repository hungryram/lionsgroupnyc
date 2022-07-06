import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"

export default function PortfolioCard({ image, title, link, _key, address, city, state, zipCode }) {
    return (
        <>
            <Link to={link} key={_key}>
                <div class="w-full bg-white hover:shadow-lg hover:transition-all transition-all hover:ease-in ease-in">
                    <div className="h-64 w-full">
                        <GatsbyImage
                            image={image.childImageSharp.gatsbyImageData}
                            className="object-cover h-full w-full"
                            alt={title}
                        />
                    </div>
                    <div class="px-4 py-2">
                        <div class="text-2xl mb-2">
                            <h3>{title}</h3>
                        </div>
                        <p>{address} <br />{city} {state} {zipCode}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <div className="flex w-full justify-end">
                            <div>
                                <span className="inline-block">View Details <BsArrowRight className="inline-block"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}