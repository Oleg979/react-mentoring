import * as React from 'react';
import copy from 'copy-to-clipboard';

export default function useCopy(): [boolean, Function] {
  const [isCopied, setCopied] = React.useState(false);

  function handleCopy(text: any): void {
    copy(text.toString());
    setCopied(true);
  }

  return [isCopied, handleCopy];
}
