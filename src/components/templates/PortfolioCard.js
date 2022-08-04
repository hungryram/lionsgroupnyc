import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"

export default function PortfolioCard({ image, title, link, _key, address, city, state, zipCode, status }) {
    return (
        <>
            <Link to={link} key={_key}>
                <div class="w-full bg-white hover:shadow-lg hover:transition-all transition-all hover:ease-in ease-in relative">
                    {status &&
                        <div className="absolute px-1 m-2 text-xs bg-black text-white">
                            <p>Coming Soon</p>
                        </div>
                    }
                    <div className="h-64 w-full">
                        {image ?
                            <GatsbyImage
                                image={image}
                                className="object-cover h-full w-full"
                                alt={title}
                            />
                            :
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="empty avatar" className="object-cover h-full w-full"/>
                        }
                    </div>
                    <div class="px-4 py-2">
                        <div>
                            <h3 className="text-2xl mb-2">{title}</h3>
                        </div>
                        <p>{address} <br />{city} {state} {zipCode}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <div className="flex w-full justify-end">
                            <div>
                                <span className="inline-block">View Details <BsArrowRight className="inline-block" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}