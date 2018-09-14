import {Command} from '@oclif/command'
import {Table, ux} from 'cli-ux'

export interface Subject<T extends object> {
  props: Table.Table.Columns<T>
  fetchAll(): Promise<T[]>
  fetchOne(id: string): Promise<T>
}

export function list<T extends object>(subject: Subject<T>): typeof Command {
  return class extends Command {
    async run() {
      const data = await subject.fetchAll()
      ux.table(data, subject.props)
    }
  }
}
