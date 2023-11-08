import DocumentRow from "./DocumentRow";
import { IDocumentRowLoop } from "./documentTypes";

export default function DocumentRowLoop({ values, action }: IDocumentRowLoop) {
  return (
    <>
      {Object.keys(values).map((subDoc, subindex) => {
        return (
          <DocumentRow
            key={"subDocLoop" + subindex}
            value={subDoc}
            action={action}
          />
        );
      })}
    </>
  );
}
