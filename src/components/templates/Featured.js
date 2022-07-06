import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import PrimaryButton from "../ui/PrimaryButton"

export default function Featured({ heading, body, backgroundImage, altTag }) {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="flex justify-center text-center">
                        <div className="lg:w-3/5 w-full">
                            <h2 className="md:text-5xl text-3xl">{heading}</h2>
                            <p>{body}</p>
                            <div className="my-10">
                                <PrimaryButton
                                    label="Management Services"
                                    link="/contact/"
                                    className="primary-button"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                    <GatsbyImage
                        image={backgroundImage.childImageSharp.gatsbyImageData}
                        alt={altTag}
                        className="object-cover w-full"
                    />
                    </div>
                </div>
            </div>
        </>
    )
}