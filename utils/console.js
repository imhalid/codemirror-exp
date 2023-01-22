import { useEffect } from 'react'

const ConsoleLog = () => {
  useEffect(() => {
    if (typeof console !== 'undefined') {
      if (typeof console.log !== 'undefined') {
        console.olog = console.log
      } else {
        console.olog = function () {}
      }
      console.log = function () {
        let consoleLog = document.getElementById('consolelog')
        let p = document.createElement('p')
        for (let i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] !== undefined) {
            document.querySelector('#consolelog').innerHTML = ''
            p.innerHTML += '> ' + JSON.stringify(arguments[i], undefined, 2)
          } else {
            consoleLog.innerHTML += ''
          }
        }
        consoleLog.appendChild(p)
      }
      console.log
    }
  }, [])
  return <code id='consolelog' />
}

export default ConsoleLog
