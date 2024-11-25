import React from 'react'
import { NavLink } from 'react-router-dom'

export const Documentation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ marginTop: '11vh' }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Documentation
          </NavLink>
          <ul className="navbar-nav mb-2 mb-lg-0" style={{ display: "float" }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="#">
                Documentation
              </NavLink>
            </li>
          </ul>
        </div>
      </nav >



      <div className="row p-4">
        <div className="col-4">
          <div id="list-example" className="list-group" style={{position:'fixed'}} >
            <a className="list-group-item list-group-item-action" href="#list-item-1" style={{border:'none', color:'orange'}}>
              File structure
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-2" style={{border:'none', color:'orange'}}>
              Compilation
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-3" style={{border:'none', color:'orange'}}>
              Images
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-4" style={{border:'none', color:'orange'}}>
              Changelog
            </a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={0}
          >
            <h4 id="list-item-1"> File structure</h4>
            <p><li>src/ - source files</li>
              <li>assets/</li>
              <li> css/ - compiled CSS files</li>
              <li>fonts/ - font files</li>
              <li>   img/ - image files</li>
              <li>js/ - JavaScript files</li>
              <li>  libs/ - third-party libraries that could not be loaded to node_modules</li>
              <li>   scss/ - source SASS files</li>
              <li>  video/ - video files</li>
              <li>  partials/ - HTML partials</li>
              <li>dist/ - production files</li>
              <li>.gitignore</li>
              <li> gulpfile.js</li>
              <li>package.json</li></p>

            <br />
            <hr />

            <h4 id="list-item-2">Compilation</h4>
            <p>Gulp is used to handle file compilation and other tasks. The following commands are available:

              <li>npm install - to download and install required dependencies</li>
              <li>gulp - to start a new server and start watching for changes in HTML, JS and SASS files</li>
              <li>gulp build - to compile SASS and HTML files, minify assets and prepare files for production</li>

              <br />
              <h4>HTML includes</h4>
              The gulp-file-include package is used to make global changes in HTML files easier. The following partials are available:
              <br />
              footer.html - imports the footer. No variables are available.
              head.html - imports the head of the page. The following variables are available:
              @@css (string) - CSS file to import
              @@title (string) - page titlebr
              <br />
              navbar.html - imports the navbar. The following variables are available: <br />
              @@togglable (boolean) - whether the navbar should be togglable as you scroll or collapse  <br />
              @@type (string) - navbar type. Whether 'light' or 'dark'<br />
              @@page (string) - currently active pagebr
              <br />
              @@button (object) - button text and URL
              script.html - import the scripts. No variables are available.
              Easily create new .html partials inside the /partials folder and point to them from any file by specifying the path to the partial file and using the @@include keyword.
              <br />
              Please read the official package documentation for more info.</p>
            <br />
            <hr />

            <h4 id="list-item-3">Images</h4>
            <p>All images used in the theme except those listed below are free for both personal and commercial use.

              <li>1.jpg - protected by copyrights and can be purchased from here</li>
              <li>20.jpg - protected by copyrights and can be purchased from here</li>
              <li>26.jpg - protected by copyrights and can be purchased from here</li>
              <li>42.jpg - protected by copyrights and can be purchased from here</li></p>
            <br />
            <hr />

            <h4 id="list-item-4">Changelog</h4>
            <p>Version 1.1.0 - 05.09.2024

             <li> Update the development dependencies to the latest version.
             Version 1.0.9 - 03.12.2019</li>
              <br />
              <li>Updated to Bootstrap v4.4.1
              Updated other dependencies
              Version 1.0.8 - 16.04.2019</li>
              <br />
             <li> Updated to Bootstrap v4.3.1
              Updated to Gulp v4
              Added Flickity fade plugin
              Version 1.0.7 - 22.12.2018</li>
              <br />
             <li> Updated to Bootstrap 4.2.1
              Fixed gulpfile.js gulp build task
              Version 1.0.6 - 18.12.2018</li>
              <br />
              <li>Added Company page
              Added Restaurant page
              Added Blog page
              Added Blog: Post page
              Added Shop page
              Added Shop: Item page</li></p>
          </div>
        </div>
      </div>

    </>
  )
}
