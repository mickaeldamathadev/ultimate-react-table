import { IDocumentRow } from "./documentTypes";

export default function DocumentRow({ value }: IDocumentRow) {
  return <td>{value}</td>;
}
