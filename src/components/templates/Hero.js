import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PrimaryButton from "../ui/PrimaryButton"

export default function Hero({ _key, backgroundImage, heading, body, buttonLink, buttonText }) {
    return (
        <div key={_key} className="heroWrapper">
            <GatsbyImage 
                image={backgroundImage.childImageSharp.gatsbyImageData} 
                className="object-cover object-top w-full h-full" 
                loading="eager" 
                alt="Hero Image"
            />
            <div className="overlay"></div>
            <div className="heroContent text-white text-center p-4">
                <h1 className="text-3xl lg:text-5xl font-thin mb-5">
                    {heading}
                </h1>
                <p>{body}</p>
                <PrimaryButton 
                    link={buttonLink}
                    text={buttonText}
                    className="mt-12"
                />
            </div>
        </div>
    )
}