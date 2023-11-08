import { IDocList } from './documentTypes'
import useRenderDocumentElements from './useRenderDocumentElements'

export default function DocumentList<T>({ documents, action }: IDocList<T>) {
  const { renderDocumentValue } = useRenderDocumentElements<T>()

  if (!documents || documents === undefined || !action) {
    return null
  }

  return (
    <tbody className="document-list-body">
      {documents.map((document, index) => {
        return renderDocumentValue(document, action)
      })}
    </tbody>
  )
}
