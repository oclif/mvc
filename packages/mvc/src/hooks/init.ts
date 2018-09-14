import {Hook} from '@oclif/config'
import * as path from 'path'

const hook: Hook<'init'> = async function (opts) {
  if (opts.id && opts.id.startsWith('@')) {
    const controllerName = opts.id.split('@')[1].split('/')[0]
    const actionName = opts.argv[0]
    const controllerRoot = path.join(this.config.root, 'src/controllers')
    const action = require(path.join(controllerRoot, controllerName, actionName)).default
    await action.run()
    this.exit(0)
  }
}

export default hook
