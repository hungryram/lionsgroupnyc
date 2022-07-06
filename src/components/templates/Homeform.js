import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import ContactForm from "../ui/ContactForm"

export default function Homeform({ backgroundImage, heading, body, altTag }) {
    return (
        <>
            <div className="section">
                <div className="container relative">
                    <div className="lg:w-1/3 w-full h-[45rem]">
                        <GatsbyImage
                            image={backgroundImage.childImageSharp.gatsbyImageData}
                            className="object-cover h-full"
                            alt={altTag}
                        />
                    </div>
                    <div className="absolute top-0 right-0 left-70 flex items-center h-full">
                        <div className="bg-white h-auto flex items-center flex-col p-10 md:w-3/5 text-center">
                            <h2 className="md:text-5xl text-3xl">Get in touch</h2>
                            <p>Have an inquiry or some feedback for us? Fill out the form below to contact our team.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}