import * as React from 'react';
import useCopy from './hooks/useCopy';
import copy from 'copy-to-clipboard';
import './style.css';

export default function App() {
  const [isCopied, setCopied] = React.useState(false);

  function handleCopy(text: any): void {
    copy(text.toString());
    setCopied(true);
  }

  return (
    <div>
      <h1>React Custom Hook useCopy()</h1>
      <p>Some text to be copied</p>
      <button onClick={() => handleCopy('Some text to be copied')}>
        {isCopied ? 'Copied' : 'Copy me!!!'}
      </button>
    </div>
  );
}

/* export default function App() {
  const [isCopied, handleCopy] = useCopy();
  return (
    <div>
      <h1>React Custom Hook useCopy()</h1>
      <p>Some text to be copied</p>
       <button onClick={() => handleCopy('Some text to be copied')}>{isCopied ? 'Copied' : 'Copy me!!!'}</button>
    </div>
  );
} */
