import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import ConsoleLog from '@/utils/console'
import { useState } from 'react'

function Home() {
  const [value, setValue] = useState(
    `const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]`,
  )

  const data =
    'The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.'

  const onChange = React.useCallback((data, viewUpdate) => {
    setValue(data)
  }, [])

  return (
    <div className='w-full mx-auto bg-black h-screen flex justify-center items-center'>
      <div className='w-[720px] p-5 bg-neutral-900 text-neutral-300 rounded-xl'>
        <h1 className='text-2xl font-bold mb-4'>slice()</h1>
        <p className='text-sm'>{data}</p>
        <div className='  my-6 w-full h-full'>
          <CodeMirror
            theme={'dark'}
            width='100%'
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            value={value}
          />
          <button
            className='bg-neutral-800 mt-2 w-24 h-12 rounded-md border-[0.5px] border-neutral-700 text-neutral-400'
            onClick={() => new Function(value)()}
          >
            Run Code
          </button>
        </div>
        <ConsoleLog />
      </div>
    </div>
  )
}
export default Home
