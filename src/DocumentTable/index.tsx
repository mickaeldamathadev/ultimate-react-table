import DocumentList from "./DocumentList";
import DocumentTableTop from "./DocumentTableTop";
import { DocumentListProps } from "./documentTypes";

export default function DocumentTable<T>({
  documents,
  apiUrl,
  action,
}: DocumentListProps<T>) {
  return documents.length === 0 ? null : (
    <table className="document-list-table">
      <DocumentTableTop<T> action={action} documents={documents} />
      <DocumentList<T> action={action} documents={documents} />
    </table>
  );
}
