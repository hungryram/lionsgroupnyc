import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn"

export default function Card({ image, title, link, _key, address, city, state, zipCode, status }) {
    return (
        <>
            <Link to={link} key={_key} className="border">
                <div className="w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-96 flex-none overflow-hidden">
                    {image ?
                            <GatsbyImage
                                image={image}
                                className="object-cover h-full w-full"
                                alt={title ? title : 'Lions Group'}
                            />
                            :
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="empty avatar" className="object-cover h-full w-full"/>
                        }
                    </div>
                    <div className="p-6 items-center w-full">
                        <div className="grid md:grid-cols-3 grid-cols-2 border-b pb-6 mb-4 gap-4">
                            <div>
                                <h2 className="text-xl font-bold">{title}</h2>
                            </div>
                        </div>
                        <div>
                        <p className="flex items-center"><MdLocationOn className="inline mr-2" />{address} <br />{city} {state} {zipCode}</p>
                            <div className="mt-5 flex justify-end">

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}