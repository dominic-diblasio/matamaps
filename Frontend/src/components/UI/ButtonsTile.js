import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ButtonsTile() {

    return (
        <div className="col-lg-8 col-sm-12">
            <h2 id="examples">Examples</h2>
            <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
            <div className="bd-example mb-5">
                <button type="button" className="btn btn-primary me-1">Primary</button>
                <button type="button" className="btn btn-secondary me-1">Secondary</button>
                <button type="button" className="btn btn-success me-1">Success</button>
                <button type="button" className="btn btn-danger me-1">Danger</button>
                <button type="button" className="btn btn-warning me-1">Warning</button>
                <button type="button" className="btn btn-info me-1">Info</button>
                <button type="button" className="btn btn-light me-1">Light</button>
                <button type="button" className="btn btn-dark me-1">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>`}
                </SyntaxHighlighter>
            </div>

            <div className="bd-callout bd-callout-info">
                <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
                <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>
            </div>
            <h2 id="disable-text-wrapping">Disable text wrapping</h2>
            <p>If you don’t want the button text to wrap, you can add the <code>.text-nowrap</code> class to the button. In Sass, you can set <code>$btn-white-space: nowrap</code> to disable text wrapping for each button.</p>
            <h2 id="button-tags">Button tags</h2>
            <p>The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
            <p>When using button classes on <code>&lt;a&gt;</code> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a <code>role="button"</code> to appropriately convey their purpose to assistive technologies such as screen readers.</p>
            <div className="bd-example mb-5">
                <a className="btn btn-primary me-1" href="#!" role="button">Link</a>
                <button className="btn btn-primary me-1" type="submit">Button</button>
                <input className="btn btn-primary me-1" type="button" value="Input" />
                <input className="btn btn-primary me-1" type="submit" value="Submit" />
                <input className="btn btn-primary me-1" type="reset" value="Reset" />
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<a className="btn btn-primary" href="#" role="button">Link</a>
<button className="btn btn-primary" type="submit">Button</button>
<input className="btn btn-primary" type="button" value="Input">
<input className="btn btn-primary" type="submit" value="Submit">
<input className="btn btn-primary" type="reset" value="Reset">`}
                </SyntaxHighlighter>

            </div>
            <h2 id="outline-buttons">Outline buttons</h2>
            <p>In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
            <div className="bd-example mb-5">
                <button type="button" className="btn btn-outline-primary me-1">Primary</button>
                <button type="button" className="btn btn-outline-secondary me-1">Secondary</button>
                <button type="button" className="btn btn-outline-success me-1">Success</button>
                <button type="button" className="btn btn-outline-danger me-1">Danger</button>
                <button type="button" className="btn btn-outline-warning me-1">Warning</button>
                <button type="button" className="btn btn-outline-info me-1">Info</button>
                <button type="button" className="btn btn-outline-light me-1">Light</button>
                <button type="button" className="btn btn-outline-dark me-1">Dark</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-outline-primary">Primary</button>
<button type="button" className="btn btn-outline-secondary">Secondary</button>
<button type="button" className="btn btn-outline-success">Success</button>
<button type="button" className="btn btn-outline-danger">Danger</button>
<button type="button" className="btn btn-outline-warning">Warning</button>
<button type="button" className="btn btn-outline-info">Info</button>
<button type="button" className="btn btn-outline-light">Light</button>
<button type="button" className="btn btn-outline-dark">Dark</button>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="sizes">Sizes</h2>
            <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>
            <div className="bd-example mb-2">
                <button type="button" className="btn btn-primary btn-lg me-1">Large button</button>
                <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-primary btn-lg">Large button</button>
<button type="button" className="btn btn-secondary btn-lg">Large button</button>`}
                </SyntaxHighlighter>

            </div>
            <div className="bd-example mb-5">
                <button type="button" className="btn btn-primary btn-sm me-1">Small button</button>
                <button type="button" className="btn btn-secondary btn-sm">Small button</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-primary btn-sm">Small button</button>
<button type="button" className="btn btn-secondary btn-sm">Small button</button>`}
                </SyntaxHighlighter>
            </div>
            <p>Create block level buttons—those that span the full width of a parent—by adding <code>.btn-block</code>.</p>
            <div className="bd-example mb-5">
                <button type="button" className="btn btn-primary btn-lg btn-block me-1">Block level button</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>`}
                </SyntaxHighlighter>
            </div>
            <h2 id="disabled-state">Disabled state</h2>
            <p>Make buttons look inactive by adding the <code>disabled</code> boolean attribute to any <code>&lt;button&gt;</code> element. Disabled buttons have <code>pointer-events: none</code> applied to, preventing hover and active states from triggering.</p>
            <div className="bd-example mb-5">
                <button type="button" className="btn btn-lg btn-primary me-1" disabled="">Primary button</button>
                <button type="button" className="btn btn-secondary btn-lg" disabled="">Button</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-lg btn-primary" disabled="">Primary button</button>
<button type="button" className="btn btn-secondary btn-lg" disabled="">Button</button>`}
                </SyntaxHighlighter>

            </div>
            <p>Disabled buttons using the <code>&lt;a&gt;</code> element behave a bit different:</p>
            <ul>
                <li><code>&lt;a&gt;</code>s don’t support the <code>disabled</code> attribute, so you must add the <code>.disabled</code> class to make it visually appear disabled.</li>
                <li>Some future-friendly styles are included to disable all <code>pointer-events</code> on anchor buttons.</li>
                <li>Disabled buttons should include the <code>aria-disabled="true"</code> attribute to indicate the state of the element to assistive technologies.</li>
            </ul>
            <div className="bd-example mb-5">
                <a href="#!" className="btn btn-primary btn-lg disabled  me-1" role="button" aria-disabled="true">Primary link</a>
                <a href="#!" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<a href="#" className="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" className="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>`}
                </SyntaxHighlighter>

            </div>
            <div className="bd-callout bd-callout-warning">
                <h5 id="link-functionality-caveat">Link functionality caveat</h5>
                <p>The <code>.disabled</code> class uses <code>pointer-events: none</code> to try to disable the link functionality of <code>&lt;a&gt;</code>s, but that CSS property is not yet standardized. In addition, even in browsers that do support <code>pointer-events: none</code>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to <code>aria-disabled="true"</code>, also include a <code>tabindex="-1"</code> attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.</p>
            </div>

            <h2 id="button-plugin">Button plugin</h2>
            <p>The button plugin allows you to create simple on/off toggle buttons.</p>
            <div className="card p-4 mb-5 shadow-sm">
                Visually, these toggle buttons are identical to the <a href="https://v5.getbootstrap.com/docs/5.0/forms/checks-radios/#checkbox-toggle-buttons">checkbox toggle buttons</a>. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked”/“not checked” (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
            </div>
            <h3 id="toggle-states">Toggle states</h3>
            <p>Add <code>data-bs-toggle="button"</code> to toggle a button’s <code>active</code> state. If you’re pre-toggling a button, you must manually add the <code>.active</code> class <strong>and</strong> <code>aria-pressed="true"</code> to ensure that it is conveyed appropriately to assistive technologies.</p>
            <div className="bd-example mb-5">
                <button type="button" className="btn btn-primary me-1" data-bs-toggle="button" >Toggle button</button>
                <button type="button" className="btn btn-primary active me-1" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
                <button type="button" className="btn btn-primary me-1" disabled={true} data-bs-toggle="button" >Disabled toggle button</button>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<button type="button" className="btn btn-primary" data-toggle="button" autocomplete="off">Toggle button</button>
<button type="button" className="btn btn-primary active" data-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
<button type="button" className="btn btn-primary" disabled="" data-toggle="button" autocomplete="off">Disabled toggle button</button>`}
                </SyntaxHighlighter>
            </div>
            <div className="bd-example mb-5">
                <a href="#!" className="btn btn-primary me-1" role="button" data-bs-toggle="button">Toggle link</a>
                <a href="#!" className="btn btn-primary active me-1" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
                <a href="#!" className="btn btn-primary disabled" aria-disabled={true} role="button" data-bs-toggle="button">Disabled toggle link</a>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<a href="#" className="btn btn-primary" role="button" data-toggle="button">Toggle link</a>
<a href="#" className="btn btn-primary active" role="button" data-toggle="button" aria-pressed="true">Active toggle link</a>
<a href="#" className="btn btn-primary disabled" tabindex="-1" aria-disabled="true" role="button" data-toggle="button">Disabled toggle link</a>`}
                </SyntaxHighlighter>
            </div>
            <h3 id="methods">Methods</h3>
            <p>You can create a button instance with the button constructor, for example:</p>
            <div className="bd-example mb-5">
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`var button = document.getElementById('myButton')
var bsButton = new bootstrap.Button(button)`}
                </SyntaxHighlighter>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>toggle</code></td>
                        <td>Toggles push state. Gives the button the appearance that it has been activated.</td>
                    </tr>
                    <tr>
                        <td><code>dispose</code></td>
                        <td>Destroys an element's button.</td>
                    </tr>
                </tbody>
            </table>
            <p>For example, to toggle all buttons</p>
            <div className="bd-example mb-5">
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
    var button = new bootstrap.Button(button)
    button.toggle()
})`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}


export default ButtonsTile;