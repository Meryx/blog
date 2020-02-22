import React from "react"
import Header from "/home/meryc/hello-world/src/components/header"
import { Link } from "gatsby"
export default () => (
  <div style={{ color: `teal` }}>
  <Link to="/">Home</Link>
  <Header headerText="About HELLLLLO Gatsby" />
  <Header headerText="Its pretty cool" />
  <p>Such wow. Very React.</p>
</div>)
