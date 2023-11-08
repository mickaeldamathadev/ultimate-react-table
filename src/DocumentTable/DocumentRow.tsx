import { IDocumentRow } from './documentTypes'

export default function DocumentRow({ value }: IDocumentRow) {
  return <td className="document-list-row">{value}</td>
}
