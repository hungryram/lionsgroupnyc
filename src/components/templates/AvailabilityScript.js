import { Script } from "gatsby"
import * as React from "react"

export default function AvailabilityScript() {
    return (
        <>
            <Script id="availablescript">
            {`
                                document.write(unescape("%3Cscript src='" + (('https:' == document.location.protocol) ? 'https:' : 'http:') + "//lionsgroup.appfolio.com/javascripts/listing.js' type='text/javascript'%3E%3C/script%3E"));
            `}

            </Script>
            <Script id="avail">
                {`
                                    Appfolio.Listing({
                                        hostUrl: 'lionsgroup.appfolio.com',
                                    themeColor: '#676767',
                                    height: '500px',
                                    width: '100%',
                                    defaultOrder: 'date_posted'
                      });
                `}
            </Script>
        </>
    )
}