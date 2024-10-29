import React from "react";
import { ProgressBar } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BasicProgress from "../../components/UI/BasicProgress";



function ProgressUI(props) {

    const { activeLayout } = props;
    return (
        <div className={activeLayout === "HeadertopMenuContainer" || activeLayout === "HeaderSubmenuContainer" || activeLayout === "HeaderSubmenuOverlayContainer" ? "container" : "container-fluid"}>
            <div className="col-12">
                <div className="card p-4 bd-content ps-lg-4">
                    <h2 id="how-it-works">How it works</h2>
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code>&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
                    <ul>
                        <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>
                        <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>
                        <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>
                        <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
                    </ul>
                    <p>Put that all together, and you have the following examples.</p>
                    <BasicProgress />
                    <p>Bootstrap provides a handful of <a href="https://v5.getbootstrap.com/docs/5.0/utilities/sizing/">utilities for setting width</a>. Depending on your needs, these may help with quickly configuring progress.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar now={75} />
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar now={75} />`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 id="labels">Labels</h4>
                    <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar now={25} label="25%" />
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar now={25} label="25%" />`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 id="height">Height</h4>
                    <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar now={25} style={{ height: 1 }} className="mb-3" />
                        <ProgressBar now={35} style={{ height: 5 }} className="mb-3" />
                        <ProgressBar now={25} style={{ height: 20 }} className="mb-3" />
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar now={25} style={{ height:1 }} className="mb-3" />
<ProgressBar now={35} style={{ height:5 }} className="mb-3" />
<ProgressBar now={25} style={{ height:20 }} className="mb-3" />`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 id="backgrounds">Backgrounds</h4>
                    <p>Use background utility classes to change the appearance of individual progress bars.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar now={25} variant="success" className="mb-3" />
                        <ProgressBar now={50} variant="info" className="mb-3" />
                        <ProgressBar now={75} variant="warning" className="mb-3" />
                        <ProgressBar now={100} variant="danger" className="mb-3" />

                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar now={25} variant="success" className="mb-3" />
<ProgressBar now={50} variant="info" className="mb-3" />
<ProgressBar now={75} variant="warning" className="mb-3" />
<ProgressBar now={100} variant="danger" className="mb-3" />`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 id="multiple-bars">Multiple bars</h4>
                    <p>Include multiple progress bars in a progress component if you need.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar>
                            <ProgressBar now={15} key={3} />
                            <ProgressBar variant="success" now={30} key={1} />
                            <ProgressBar variant="info" now={20} key={2} />
                        </ProgressBar>

                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar>
    <ProgressBar now={15} key={3} />
    <ProgressBar variant="success" now={30} key={1} />
    <ProgressBar variant="info" now={20} key={2} />
</ProgressBar>`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 id="striped">Striped</h4>
                    <p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar striped now={10} className="mb-3" />
                        <ProgressBar striped now={25} variant="success" className="mb-3" />
                        <ProgressBar striped now={50} variant="info" className="mb-3" />
                        <ProgressBar striped now={75} variant="warning" className="mb-3" />
                        <ProgressBar striped now={100} variant="danger" className="mb-3" />
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar striped now={10} className="mb-3" />
<ProgressBar striped now={25} variant="success" className="mb-3" />
<ProgressBar striped now={50} variant="info" className="mb-3" />
<ProgressBar striped now={75} variant="warning" className="mb-3" />
<ProgressBar striped now={100} variant="danger" className="mb-3" />`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 id="animated-stripes">Animated stripes</h4>
                    <p>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>
                    <div className="bd-example card p-3 mb-3">
                        <ProgressBar striped animated now={10} className="mb-3" />
                        <ProgressBar striped animated now={25} variant="success" className="mb-3" />
                        <ProgressBar striped animated now={50} variant="info" className="mb-3" />
                        <ProgressBar striped animated now={75} variant="warning" className="mb-3" />
                        <ProgressBar striped animated now={100} variant="danger" className="mb-3" />
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ProgressBar striped animated  now={10} className="mb-3" />
<ProgressBar striped animated  now={25} variant="success" className="mb-3" />
<ProgressBar striped animated  now={50} variant="info" className="mb-3" />
<ProgressBar striped animated  now={75} variant="warning" className="mb-3" />
<ProgressBar striped animated  now={100} variant="danger" className="mb-3" />`}
                        </SyntaxHighlighter>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ProgressUI;