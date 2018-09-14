import {Command, run} from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'

export default class Run extends Command {
  static strict = false

  async run() {
    const {argv} = this.parse(Run)
    const cwd = process.cwd()
    const tsconfig = {
      path: path.join(cwd, 'tsconfig.json'),
      content: `{
  "compilerOptions": {
    "declaration": true,
    "forceConsistentCasingInFileNames": true,
    "importHelpers": true,
    "module": "commonjs",
    "outDir": "./lib",
    "rootDirs": [ "./src" ],
    "strict": true,
    "target": "es2017",
    "typeRoots": [ "./node_modules/@types" ]
  },
  "include": [
    "./src/**/*"
  ]
}
`,
    }
    if (!await fs.pathExists(tsconfig.path)) {
      await fs.writeFile(tsconfig.path, tsconfig.content)
    }
    await run(argv, cwd)
  }
}
