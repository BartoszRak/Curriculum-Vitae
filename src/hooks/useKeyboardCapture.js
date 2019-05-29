import { useEffect } from 'react'

const cmds = [{ command: 'snake', state: '' }, { command: 'stop', state: '' }]

function useKeyboardCapture(targets) {
  const recognizeKey = evt => {
    const { keyCode } = evt
    const key = String.fromCharCode(keyCode).toLowerCase()
    cmds.forEach(cmd => {
      const stateProposal = `${cmd.state}${key}`
      const slicedCommand = cmd.command.slice(0, stateProposal.length)
      cmd.state = stateProposal === slicedCommand ? stateProposal : ''
      if (cmd.state === cmd.command) {
        targets.forEach(target => target(cmd.command))
        cmd.state = ''
      }
    })
  }

  useEffect(() => {
    window.addEventListener('keydown', recognizeKey)
    return () => {
      window.removeEventListener('keydown', recognizeKey)
    }
  })
}

export default useKeyboardCapture
