import { Link } from "gatsby"
import * as React from "react"

export default function PrimaryButton({ className, link, label }) {
    return (
        <>
            <Link to={link} className={className}>{label}</Link>
        </>
    )
}