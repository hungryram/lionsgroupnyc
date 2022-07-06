import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PrimaryButton from "../ui/PrimaryButton"

export default function Banner({ heading, body, backgroundImage, altTag, link, label }) {
    return (
        <>
            <div className="w-full h-screen relative">
                <div className="absolute z-50 bottom-52 md:px-20 px-10">
                    <div className="bg-white md:w-1/2 w-full md:p-18 p-10">
                        <h2 className="md:text-5xl text-3xl mb-10">{heading}</h2>
                        <p>{body}</p>
                        <div className="my-10">
                            <PrimaryButton
                                label={label}
                                link={link}
                                className="primary-button"
                            />
                        </div>
                    </div>
                </div>
                <GatsbyImage
                    image={backgroundImage.childImageSharp.gatsbyImageData}
                    alt={altTag}
                    className="object-cover w-full h-full"
                />
            </div>
        </>
    )
}