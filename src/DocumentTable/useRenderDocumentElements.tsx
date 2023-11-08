import React from "react";
import DocKeys from "./DocKeys";
import DocumentRow from "./DocumentRow";
import { DocumentType } from "./documentTypes";

export default function useRenderDocumentElements<T>() {
  const renderKeys = (
    document: DocumentType<T>,
    action?: (data: any) => void,
  ): React.ReactNode => {
    return <DocKeys<T> action={action} document={document} />;
  };

  const renderDocumentValue = (
    document: DocumentType<T>,
    action?: (data: any) => void,
  ): React.ReactNode => {
    return (
      <tr className="document-list-row" key={document._id}>
        {Object.keys(document).map((key, index) => {
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
          const value = document[key as keyof T] as string;
          if (typeof value === "object" && value) {
            return Object.keys(value).map((subDoc, subindex) => {
              return (
                <DocumentRow
                  key={document._id + key}
                  value={value[key as string]}
                />
              );
            });
          } else if (value) {
            return <DocumentRow key={document._id + key} value={value} />;
          }
        })}
        {action ? (
          <td className="actions" onClick={() => action(document._id)}>
            <p style={{ margin: "1rem" }}>{">"}</p>
          </td>
        ) : null}
      </tr>
    );
  };
  return { renderKeys, renderDocumentValue };
}
