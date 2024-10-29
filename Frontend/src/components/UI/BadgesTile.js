import React from "react";
import { Badge } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function BadgesTile() {

    return (
        <div className="col-12">
            <div className="card p-4 bd-content">
                <h2 id="example">Example</h2>
                <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units. As of v5, badges no longer have focus or hover styles for links.</p>
                <div className="bd-example mb-5">
                    <h1>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h1>
                    <h2>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h2>
                    <h3>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h3>
                    <h4>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h4>
                    <h5>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h5>
                    <h6>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h6>

                    <SyntaxHighlighter language="javascript" className="mt-2 language-html" style={a11yLight} >
                        {`<h1>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h1>
<h2>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h2>
<h3>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h3>
<h4>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h4>
<h5>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h5>
<h6>Example heading <Badge variant="secondary" className="bg-secondary">New</Badge></h6>`}
                    </SyntaxHighlighter>
                </div>

                <p>Badges can be used as part of links or buttons to provide a counter.</p>
                <div className="bd-example mb-5">
                    <button type="button" className="btn btn-primary">
                        Notifications <Badge variant="light" className="bg-secondary">9</Badge>
                    </button>
                    <SyntaxHighlighter language="javascript" className="mt-2 language-html" style={a11yLight}>
                        {`<button type="button" className="btn btn-primary">
Notifications <Badge variant="light" className="bg-secondary">9</Badge>
</button>`}
                    </SyntaxHighlighter>
                </div>

                <p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p>
                <p>Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.</p>
                <div className="bd-example mb-5">
                    <button type="button" className="btn btn-primary">
                        Profile <Badge variant="light" className="bg-secondary">9</Badge>
                    </button>
                    <SyntaxHighlighter language="html" className="mt-2 language-html" style={a11yLight} >
                        {` <button type="button" className="btn btn-primary">
    Profile <Badge variant="light" className="bg-secondary">9</Badge>
</button>`}
                    </SyntaxHighlighter>
                </div>

                <h2 id="background-colors">Background colors</h2>
                <p>Use our background utility classes to quickly change the appearance of a badge. Please note that when using Bootstrap’s default <code>.bg-light</code>, you’ll likely need a text color utility like <code>.text-dark</code> for proper styling. This is because background utilities do not set anything but <code>background-color</code>.</p>
                <div className="bd-example mb-5">
                    <Badge variant="primary" className="bg-secondary">Primary</Badge>{' '}
                    <Badge variant="secondary" className="bg-success">Secondary</Badge>{' '}
                    <Badge variant="success" className="bg-danger">Success</Badge>{' '}
                    <Badge variant="danger" className="bg-warning">Danger</Badge>{' '}
                    <Badge variant="warning" className="bg-info">Warning</Badge> {' '}
                    <Badge variant="info" className="bg-info">Info</Badge>{' '}
                    <Badge variant="light" className="bg-light">Light</Badge> {' '}
                    <Badge variant="dark" className="bg-dark">Dark</Badge>
                    <SyntaxHighlighter language="javascript" className="mt-2 language-html" style={a11yLight}>
                        {`<Badge variant="primary" className="bg-secondary">Primary</Badge>
<Badge variant="secondary" className="bg-success">Secondary</Badge>
<Badge variant="success" className="bg-danger">Success</Badge>
<Badge variant="danger" className="bg-warning">Danger</Badge>
<Badge variant="warning" className="bg-info">Warning</Badge>
<Badge variant="info" className="bg-info">Info</Badge>
<Badge variant="light" className="bg-light">Light</Badge>
<Badge variant="dark" className="bg-dark">Dark</Badge>`}
                    </SyntaxHighlighter>
                </div>

                <div className="bd-callout bd-callout-info">
                    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
                    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>
                </div>

                <h2 id="pill-badges">Pill badges</h2>
                <p>Use the <code>.rounded-pill</code> utility class to make badges more rounded with a larger <code>border-radius</code>.</p>
                <div className="bd-example mb-5">
                    <Badge pill variant="primary" className="rounded-pill bg-secondary">Primary</Badge>{' '}
                    <Badge pill variant="secondary" className="rounded-pill bg-success">Secondary</Badge>{' '}
                    <Badge pill variant="success" className="rounded-pill bg-danger">Success</Badge>{' '}
                    <Badge pill variant="danger" className="rounded-pill bg-warning">Danger</Badge>{' '}
                    <Badge pill variant="warning" className="rounded-pill bg-info">Warning</Badge> {' '}
                    <Badge pill variant="info" className="rounded-pill bg-info">Info</Badge>{' '}
                    <Badge pill variant="light" className="rounded-pill bg-light">Light</Badge> {' '}
                    <Badge pill variant="dark" className="rounded-pill bg-dark">Dark</Badge>
                    <SyntaxHighlighter language="javascript" className="mt-2 language-html" style={a11yLight} >
                        {`<Badge pill variant="primary" className="rounded-pill bg-secondary">Primary</Badge>{' '}
<Badge pill variant="secondary" className="rounded-pill bg-success">Secondary</Badge>{' '}
<Badge pill variant="success" className="rounded-pill bg-danger">Success</Badge>{' '}
<Badge pill variant="danger" className="rounded-pill bg-warning">Danger</Badge>{' '}
<Badge pill variant="warning" className="rounded-pill bg-info">Warning</Badge> {' '}
<Badge pill variant="info" className="rounded-pill bg-info">Info</Badge>{' '}
<Badge pill variant="light" className="rounded-pill bg-light">Light</Badge> {' '}
<Badge pill variant="dark" className="rounded-pill bg-dark">Dark</Badge>`}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}



export default BadgesTile;