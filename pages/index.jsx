import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import ConsoleLog from '@/utils/console'
import { useState, useCallback } from 'react'
import { tokyoNight, tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night'
import { tags as t } from '@lezer/highlight'

function Home() {
  const [value, setValue] = useState(
    `const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]



`,
  )

  const isFunction = functionToCheck => {
    if (functionToCheck.includes('console')) {
      return new Function(functionToCheck)()
    } else if (
      functionToCheck.includes('console') &&
      typeof functionToCheck !== Function
    ) {
      return console.log('Syntax Error')
    } else if (functionToCheck.includes('console') === false) {
      return console.log('Miss Console Log')
    }
  }

  const data =
    'The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.'

  const onChange = useCallback((data, viewUpdate) => {
    setValue(data)
  }, [])

  return (
    <div className='w-full mx-auto bg-black h-screen flex justify-center items-center'>
      <div className='w-[720px] p-5 bg-neutral-900 text-neutral-300 rounded-xl'>
        <h1 className='text-2xl font-bold mb-4'>slice()</h1>
        <p className='text-sm'>{data}</p>
        <div className='my-6 w-full h-full '>
          <CodeMirror
            width='100%'
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            theme={tokyoNightInit({
              settings: {
                caret: '#c6c6c6',
                fontFamily: 'monospace',
              },
              styles: [{ tag: t.comment, color: '#6272a4' }],
            })}
            value={value}
          />
          <button
            className='bg-neutral-800 mt-2 w-24 h-12 rounded-md border-[0.5px] border-neutral-700 text-neutral-400'
            onClick={() => isFunction(value)}
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
