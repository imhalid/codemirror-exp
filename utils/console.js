import { useEffect } from 'react'

const ConsoleLog = () => {
  useEffect(() => {
    if (typeof console !== 'undefined') {
      if (typeof console.log !== 'undefined') {
        console.olog = console.log
      } else {
        console.olog = function () {}
      }
      console.log = function (message) {
        let consolelog = document.querySelector('#consolelog')
        let p = document.createElement('p')
        p.innerHTML = message
        consolelog.appendChild(p)
      }
      console.error = console.debug = console.info = console.log
    }
  }, [])
    return <div id="consolelog" />
}

export default ConsoleLog