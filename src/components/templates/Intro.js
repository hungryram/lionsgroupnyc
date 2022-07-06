import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import i from "../../images/luxury-image.png"
import PrimaryButton from "../ui/PrimaryButton"

export default function Intro({ heading, body }) {
    return (
        <>
            <div className="section">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-1/2 md:px-20 px-10">
                        <h2 className="md:text-5xl text-3xl">{heading}</h2>
                        <p>{body}</p>
                        <div className="my-10">
                            <PrimaryButton
                                label="Learn more"
                                link="/contact/"
                                className="primary-button"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2">
                            <div className="h-[36rem]">
                            <StaticImage
                                src="../../images/luxury-image.png"
                                className="object-cover h-full m-2"
                            />
                            </div>
                            <div className="h-[36rem]">
                            <StaticImage
                                src="../../images/luxury-living-room.png"
                                className="object-cover h-full m-2"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}