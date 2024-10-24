import React from "react";
import OpenMenu from "../../assets/images/document/menu-open.png";
import CloseMenu from "../../assets/images/document/menu-close.png";

function Documentation() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mb-3 pt-3 card" style={{ fontSize: 16 }}>
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-thumbs-up me-2"></i>Getting Started</h5>
                        </div>
                        <div className="card-body">
                            <p>This guide will help you get started with <strong className="text-secondary">my-Task</strong>! All the important stuff –&nbsp;compiling the source, file structure, build tools, file includes –&nbsp;is documented here, but should you have any questions, always feel free to reach out to <span className="text-muted">pixelwibes@gmail.com</span></p>
                            <p>If you really like our work, design, performance and support then <a href="https://themeforest.net/downloads"> please don't forgot to rate us</a> on Themeforest,<br /> it really motivate us to provide something better.
                                <span className="ms-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                </span>
                            </p>
                            <p className="mb-0"><strong>Please Note :</strong></p>
                            <p>- All images are just used for Preview Purpose Only. They are not part of the template and NOT included in the final purchase files.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-code me-2"></i>Installation Setup</h5>
                        </div>

                        <div className="card-body">
                            <p>To get started, you need to do the following:</p>
                            <p>This template is built on react 18+ Node v20.3.1</p>
                            <ul>
                                <li><strong>Node.js and NPM:</strong>  You can download Node.js from <a href="https://nodejs.org" target="_blank" className="text-primary text-decoration-underline">NodeJS</a>. NPM comes bundled with Node.js</li>
                                <li><strong>Project setup:</strong> After installing Node <code>npm install</code> command from the root of your project directory into terminal. It will install all the necessary dependencies for the application using package.json file.</li>
                                <li><strong>Development server:</strong> Run <code>npm Start</code> command from project directory and navigate to <strong>http://localhost:4200/</strong> into your browser.</li>
                                <li><strong>Build:</strong> Run <code>npm run build</code> command from project directory to build the project. The build artifacts will be stored in the dist/ directory.</li>
                                <li><strong>Further help:</strong> To get more help on the project setup, go and check out <a href="https://reactjs.org/" target="_blank" className="text-primary text-decoration-underline">https://reactjs.org/</a>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-folder me-2"></i>File Structure</h5>
                        </div>

                        <div className="card-body">
                            <ul>
                                <li><strong><i className="icofont-folder text-secondary me-2"></i>node_modules</strong> <span className="text-muted">- NPM dependencies (by default the folder is not included) <code>npm</code> installs dependencies. </span></li>
                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Public</strong></li>
                                <li>
                                    <strong><i className="icofont-folder-open text-secondary me-2"></i>src</strong>
                                    <ul className="mb-3">
                                        <li>
                                            <strong><i className="icofont-folder-open text-secondary me-2"></i>assets</strong>
                                        </li>
                                        <li>
                                            <strong><i className="icofont-folder-open text-secondary me-2"></i>Components</strong>
                                            <ul className="mb-3">
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Auth</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Clients</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>common</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Dashboard</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Data</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Employees</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Invoices</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Pages</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Projects</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Ticket</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>UI</strong></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong><i className="icofont-folder-open text-secondary me-2"></i>screens</strong>
                                            <ul className="mb-3">
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Accounts</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>App</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Changelog</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Dashboard</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Documentation</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Employee</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>OtherPages</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Our Clients</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Payroll</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Projects</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Stater</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>Tickets</strong></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>UIComponents</strong></li>
                                                <li><strong><i className="icofont-file-code text-secondary me-2"></i>AuthIndex.js</strong></li>
                                                <li><strong><i className="icofont-file-code text-secondary me-2"></i>mainIndex.js</strong></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong><i className="icofont-file-code text-secondary me-2"></i>App</strong>
                                        </li>
                                        <li>
                                            <strong><i className="icofont-file-code text-secondary me-2"></i>index</strong>
                                        </li>
                                        <li>
                                            <strong><i className="icofont-file-code text-secondary me-2"></i>logo.svg</strong>
                                        </li>
                                        <li>
                                            <strong><i className="icofont-file-code text-secondary me-2"></i>setupTests</strong>
                                        </li>
                                    </ul>
                                </li>
                                <li><strong><i className="icofont-file-code color-light-orange  me-2"></i>Gruntfile.js</strong> <span className="text-muted">- All the build commands</span></li>
                                <li><strong><i className="icofont-file-code color-light-orange  me-2"></i>package.json</strong> <span className="text-muted">- List of dependencies and npm information</span></li>
                                <li><strong><i className="icofont-file-code color-light-orange  me-2"></i>.gitignore</strong> <span className="text-muted">- Hide all unnecessary files from Git</span></li>
                                <li>
                                    <strong><i className="icofont-folder text-secondary me-2"></i>documentation</strong> <span className="text-muted">- Project documentation</span>
                                    <ul className="mb-3">
                                        <li>
                                            <strong><i className="icofont-folder-open text-secondary me-2"></i>assets</strong>
                                            <ul className="mb-3">
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>css</strong> <span className="text-muted">- Compiled CSS file</span></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>fonts</strong> <span className="text-muted">- Icon font and font awesome </span></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>images</strong> <span className="text-muted">- Image assets</span></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>js</strong> <span className="text-muted">-  Compiled JS file</span></li>
                                                <li><strong><i className="icofont-folder text-secondary me-2"></i>plugin</strong> <span className="text-muted">- plugins JS and css file</span></li>
                                            </ul>
                                        </li>
                                        <li><strong><i className="icofont-file-code color-light-orange me-2"></i>index.html</strong> <span className="text-muted">- well project document</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-paint-brush me-2"></i>Comman Utilities With Custom Class</h5>
                        </div>
                        <div className="card-header">
                            <h5 className="fw-bold">Text Color</h5>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered  doc-table">
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>.text-primary</code></td>
                                        <td className="text-primary">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.text-secondary</code></td>
                                        <td className="text-secondary">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.text-success</code></td>
                                        <td className="text-success">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.text-info</code></td>
                                        <td className="text-info">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.text-warning</code></td>
                                        <td className="text-warning">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.text-danger</code></td>
                                        <td className="text-danger">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.text-dark</code></td>
                                        <td className="text-dark">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.color-lightyellow</code></td>
                                        <td className="color-lightyellow">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.color-lightblue</code></td>
                                        <td className="color-lightblue">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.color-light-success</code></td>
                                        <td className="color-light-success">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.color-light-orange</code></td>
                                        <td className="color-light-orange">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.color-careys-pink</code></td>
                                        <td className="color-careys-pink">Lorem ipsum dolor sit amet consectecur.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-header">
                            <h5 className="fw-bold">Background Color</h5>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered doc-table">
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>.bg-primary</code></td>
                                        <td className="bg-primary"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-secondary</code></td>
                                        <td className="bg-secondary"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-success</code></td>
                                        <td className="bg-success"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-info</code></td>
                                        <td className="bg-info"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-warning</code></td>
                                        <td className="bg-warning"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-danger</code></td>
                                        <td className="bg-danger"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-dark</code></td>
                                        <td className="bg-dark"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-white</code></td>
                                        <td className="bg-white"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-lightyellow</code></td>
                                        <td className="bg-lightyellow"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-lightblue</code></td>
                                        <td className="bg-lightblue"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.bg-careys-pink</code></td>
                                        <td className="bg-careys-pink"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.light-success-bg</code></td>
                                        <td className="light-success-bg"></td>
                                    </tr>
                                    <tr>
                                        <td><code>.light-orange-bg </code></td>
                                        <td className="light-orange-bg"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-paint me-2"></i>Layouts Components</h5>
                            <p className="text-muted">Comman Components Easy to customize by developer</p>
                        </div>
                        <div className="row g-2">
                            <div className="col-md-12">
                                <div className="card-header">
                                    <h5 className="fw-bold">Button</h5>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example">
                                        <button type="button" className="btn btn-primary me-1">Primary</button>
                                        <button type="button" className="btn btn-secondary me-1">Secondary</button>
                                        <button type="button" className="btn btn-success me-1">Success</button>
                                        <button type="button" className="btn btn-danger me-1">Danger</button>
                                        <button type="button" className="btn btn-warning me-1">Warning</button>
                                        <button type="button" className="btn btn-info me-1">Info</button>
                                        <button type="button" className="btn btn-light me-1">Light</button>
                                        <button type="button" className="btn btn-dark me-1">Dark</button>

                                        <button type="button" className="btn btn-link">Link</button>
                                        <pre className=" language-html p-3 mt-2"><code className=" language-html" data-lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-info<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-light<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />

                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card-header">
                                    <h5 className="fw-bold">Navbar</h5>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example">
                                        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                                            <div className="container-xxl">
                                                <a className="navbar-brand" href="#!">Navbar</a>
                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon"></span>
                                                </button>
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                                        <li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Dropdown
                                                            </a>
                                                            <ul className="dropdown-menu border-0 shadow" aria-labelledby="navbarDropdown">
                                                                <li><a className="dropdown-item" href="#!">Action</a></li>
                                                                <li><a className="dropdown-item" href="#!">Another action</a></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><a className="dropdown-item" href="#!">Something else here</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link disabled" href="#!" tabIndex="-1" aria-disabled="true">Disabled</a></li>
                                                    </ul>
                                                    <form className="d-flex">
                                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </nav>
                                        <pre className=" m-0 language-html p-3" data-lang="html"><code className=" language-html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbar navbar-expand-lg navbar-light bg-light<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>container-xxl<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbar-brand<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Navbar<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbar-toggler<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#navbarSupportedContent<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbarSupportedContent<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Toggle navigation<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbar-toggler-icon<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse navbar-collapse<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbarSupportedContent<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ul</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbar-nav me-auto mb-2 mb-lg-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-link active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-link<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-item dropdown<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-link dropdown-toggle<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbarDropdown<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>dropdown<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            Dropdown
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ul</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>dropdown-menu border-0 shadow<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>navbarDropdown<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Action<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Another action<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>hr</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>dropdown-divider<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Something else here<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ul</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>nav-link disabled<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">tabindex</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>-1<span className="token punctuation">"</span></span> <span className="token attr-name">aria-disabled</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Disabled<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ul</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>form</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>d-flex<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control me-2<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>search<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Search<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Search<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-success<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Search<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>form</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card-header">
                                    <h5 className="fw-bold">Breadcrumb</h5>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb p-2">
                                                <li className="breadcrumb-item active" aria-current="page">Home</li>
                                            </ol>
                                        </nav>

                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb p-2">
                                                <li className="breadcrumb-item"><a href="#!">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                                            </ol>
                                        </nav>

                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb p-2">
                                                <li className="breadcrumb-item"><a href="#!">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#!">Library</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                                            </ol>
                                        </nav>
                                        <pre className=" language-html p-3"><code className=" language-html" data-lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span><br />

                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Library<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span><br />

                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Library<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Data<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card-header">
                                    <h5 className="fw-bold">Card</h5>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#!" className="card-link">Card link</a>
                                                <a href="#!" className="card-link">Another link</a>
                                            </div>
                                        </div>
                                        <pre className=" language-html p-3"><code className=" language-html" data-lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span> <span className="token style-attr"><span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span><span className="token style language-css"><span className="token property">width</span><span className="token punctuation">:</span> 18rem<span className="token punctuation">;</span></span><span className="token punctuation">"</span></span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h6</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-subtitle mb-2 text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card subtitle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h6</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Some quick example text to build on the card title and make up the bulk of the card's content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Another link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br />
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-flag-alt-2 me-2"></i>Advantages </h5>
                        </div>

                        <div className="card-body">
                            <ul style={{ fontSize: 16 }}>
                                <li>Very easy access to any starters components and core settings from anywhere in the template.</li>
                                <li>Intuitive clear architecture.</li>
                                <li>Avoiding the probabilities of conflicts between Front codes and third party plugins (libraries).</li>
                                <li>Creation of wrapper components simply solves complicated initializations structures for the users.</li>
                                <li>Everything is structured, each component in its own file and in its component in the main object.</li>
                                <li>The ability of extending functionality without affecting the behavior of the core object and not changing the existing functionality.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-diamond me-2"></i>my-Task Template Credit</h5>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <td>Google font</td>
                                            <td><a href="https://fonts.google.com/">https://fonts.google.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Bootstrap</td>
                                            <td><a href="https://v5.getbootstrap.com/">https://v5.getbootstrap.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Jquery</td>
                                            <td><a href="https://jquery.com/">https://jquery.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>SASS</td>
                                            <td><a href="https://sass-lang.com/">https://sass-lang.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Grunt</td>
                                            <td><a href="https://gruntjs.com/">https://gruntjs.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>NPM</td>
                                            <td><a href="https://www.npmjs.com/">https://www.npmjs.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Fontawesome</td>
                                            <td><a href="https://fontawesome.com/v4.7.0/">https://fontawesome.com/v4.7.0/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Icon Font</td>
                                            <td><a href="https://icofont.com/icons">https://icofont.com/icons</a></td>
                                        </tr>
                                        <tr>
                                            <td>Apex Charts</td>
                                            <td><a href="https://apexcharts.com/">https://apexcharts.com/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Sparkline Charts</td>
                                            <td><a href="https://omnipotent.net/jquery.sparkline/#s-about">https://omnipotent.net/jquery.sparkline/#s-about</a></td>
                                        </tr>
                                        <tr>
                                            <td>Fullcalendar</td>
                                            <td><a href="https://fullcalendar.io/">https://fullcalendar.io/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Pexels</td>
                                            <td><a href="https://www.pexels.com/">https://www.pexels.com/</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="mb-3 pt-3 card">
                        <div className="card-header">
                            <h5 className="fw-bold"><i className="icofont-love me-2"></i>THANK YOU!</h5>
                        </div>
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="card overflow-hidden mb-3">
                                        <div className="bg-primary py-5 px-4 text-light">
                                            <h4>pixelwibes.com</h4>
                                            <span className="small">Once again, thank you so much for purchasing this template. As I said at the beginning, I'd be glad to help you if you have any questions relating to this template.
                                                If you really like our work, design, performance and support then <a className="text-warning" href="https://themeforest.net/downloads"> please don't forgot to rate us</a> on Themeforest, it really motivate us to provide something better.</span>
                                        </div>
                                        <div className="p-4">
                                            <h6>Customize Code and Devlopment</h6>
                                            <span>We Can provide Bunch of Services to Customize Template According To Your Requirements</span>
                                            <div className="mt-4 mb-2">
                                                <a href="http://www.pixelwibes.com" target="_blank" rel="noreferrer" className="btn btn-primary">Hire Us</a>
                                            </div>
                                            <div className="dividers-block"></div>
                                            <h6>my-Task guide</h6>
                                            <span>Get started with my-Task Business and learn about features for admins and users.</span>
                                            <div className="mt-4 mb-2">
                                                <a href="http://pixelwibes.com/" className="btn btn-primary">Check out the guide</a>
                                            </div>
                                            <div className="dividers-block"></div>
                                            <h6>Get answers</h6>
                                            <span>Visit the help centre for answers to common issues.</span>
                                            <div className="mt-4 mb-2">
                                                <a href="http://pixelwibes.com/" className="btn btn-primary">Go to Help Centre</a>
                                            </div>
                                            <div className="dividers-block"></div>
                                            <span className="text-muted">Thanks for choosing <strong className="text-warning">Pixel Wibes</strong> Admin.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12">
                                    <div className="card bg-info-light mb-3">
                                        <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                            <div className="preview-pane text-center">
                                                <svg width="100" fill="currentColor" className="bi bi-chat-text color-defult " viewBox="0 0 16 16">
                                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                                                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"></path>
                                                </svg>
                                                <a href="http://pixelwibes.com/" className="fw-bold fs-6 mt-2 d-flex justify-content-center color-defult ">Chat with us</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-lightyellow">
                                        <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                            <div className="preview-pane text-center">
                                                <svg width="100" fill="currentColor" className="bi bi-envelope color-defult " viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path>
                                                </svg>
                                                <a href="mailto:pixelwibes@gmail.com" className="fw-bold  fs-6 mt-2 d-flex justify-content-center color-defult ">Email us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Documentation;