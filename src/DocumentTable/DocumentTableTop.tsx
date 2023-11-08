import { ITableTop } from "./documentTypes";
import useRenderDocumentElements from "./useRenderDocumentElements";

export default function DocumentTableTop<T>({
  documents,
  action,
}: ITableTop<T>) {
  const { renderKeys } = useRenderDocumentElements<T>();

  if (!documents || documents === undefined) {
    return null;
  }
  return <thead>{renderKeys(documents[0], action)}</thead>;
}
