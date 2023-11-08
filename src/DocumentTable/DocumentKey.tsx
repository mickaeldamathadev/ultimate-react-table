import { IDocumentRow } from "./documentTypes";

export default function DocumentKey({ value }: IDocumentRow) {
  return <th className="document-list-key ">{value}</th>;
}
