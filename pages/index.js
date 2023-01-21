import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import ConsoleLog from '@/utils/console';
import { useState } from 'react';
import Script from 'next/script';

function Home() {
  const [value, setValue] = useState(console.log);
  
  const onChange = React.useCallback((data, viewUpdate) => {
    setValue(data);
  }, []);
  return (
    <div>
    <CodeMirror
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      />
      <button onClick={() => eval(value)}>Click me</button>
    <ConsoleLog />
      </div>
  );
}
export default Home;