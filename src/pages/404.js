import * as React from "react"
import Layout from "../components/global/Layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>Looks like the page may have been moved or deleted.</p>
          
        </div>
      </div>
    </Layout>
  )
}