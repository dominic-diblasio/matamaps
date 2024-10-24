import React from "react";
import { ProgressBar } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BasicProgress() {

  return (
    <div className="bd-example card p-3 mb-3">
      <ProgressBar className="mb-2" />
      <ProgressBar now={25} className="mb-2" />
      <ProgressBar now={50} className="mb-2" />
      <ProgressBar now={75} className="mb-2" />
      <ProgressBar now={100} className="mb-2" />
      <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
        {`<ProgressBar className="mb-2" />
<ProgressBar now={25} className="mb-2" />
<ProgressBar now={50} className="mb-2" />
<ProgressBar now={75} className="mb-2" />
<ProgressBar now={100} className="mb-2" />`}
      </SyntaxHighlighter>
    </div>
  );
}

export default BasicProgress;