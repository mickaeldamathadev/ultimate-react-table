import DocumentList from './DocumentList'
import DocumentTableTop from './DocumentTableTop'
import { DocumentListProps } from './documentTypes'

/**
 *
 * CSS classes
 *
 * table => document-list-table
 * header => document-list-top
 *  keys => document-list-key
 *  actions => actions
 * body => document-list-body
 *  rows => document-list-row
 *  actions => actions
 */

export default function DocumentTable<T>({
  documents,
  action,
}: DocumentListProps<T>) {
  return documents.length === 0 ? null : (
    <table className="document-list-table">
      <DocumentTableTop<T> action={action} documents={documents} />
      <DocumentList<T> action={action} documents={documents} />
    </table>
  )
}
