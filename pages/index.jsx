import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import ConsoleLog from '@/utils/console'
import { useState, useCallback } from 'react'
import { tokyoNight, tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night'
import { tags as t } from '@lezer/highlight'
import Link from 'next/link'

function Home() {
  const [value, setValue] = useState(
    `const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]



`,
  )

  const isFunction = functionToCheck => {
    if (functionToCheck.includes('console')) {
      document.querySelector('#consolelog').innerHTML = ''
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
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold'>Slice()</h1>
          <Link
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'
            prefetch
            target={'_blank'}
          >
            <PhInfoDuotone className='w-7 h-7 text-indigo-500 transition-all hover:text-indigo-600 ' />
          </Link>
        </div>
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
          <div className='mt-2 flex justify-start items-center space-x-5'>
            <button
              className='bg-emerald-700  w-28 h-12 rounded-md border-[0.5px] font-bold border-neutral-700 text-emerald-200'
              onClick={() => isFunction(value)}
            >
              Run Code
            </button>
            <div className='bg-neutral-800 items-center  w-full h-auto min-h-[3rem] px-5 py-1  flex rounded-md border-[0.5px] border-neutral-700 text-neutral-400'>
              <ConsoleLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

export function PhInfoDuotone(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <path
        fill='currentColor'
        d='M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z'
        opacity='.2'
      ></path>
      <path
        fill='currentColor'
        d='M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm16-40a8 8 0 0 1-8 8h-8a8 8 0 0 1-8-8v-48a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8v48a8 8 0 0 1 8 8Zm-30-92a12 12 0 1 1 12 12a12 12 0 0 1-12-12Z'
      ></path>
    </svg>
  )
}
