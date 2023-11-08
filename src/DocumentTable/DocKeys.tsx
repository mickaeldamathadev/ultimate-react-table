import DocumentKey from "./DocumentKey";
import DocumentRowLoop from "./DocumentRowLoop";
import { IDocKeys } from "./documentTypes";

export default function DocKeys<T>({ document, action }: IDocKeys<T>) {
  if (!document) return null;
  return (
    <tr className={"document-list-top"} key={document._id}>
      {Object.keys(document).map((key, index) => {
        const [k] = Object.values(key);

        if (
          [
            "_id",
            "created_at",
            "updated_at",
            "created_by",
            "__v",
            "",
            "logged_in",
            "external",
          ].includes(key)
        ) {
          return;
        }

        if (typeof key === "object" && key) {
          return <DocumentRowLoop key={document._id + key} values={key} />;
        }
        return <DocumentKey key={document._id + key} value={key as string} />;
      })}
      {action ? (
        <td
          className="actions"
          style={{ margin: "1rem", color: "transparent" }}
        >
          {">"}
        </td>
      ) : null}
    </tr>
  );
}
