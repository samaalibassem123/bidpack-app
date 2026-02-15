import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>Nouveau message</h2>
      <p>
        <strong>Name : </strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>subject:</strong>{" "}
        {subject === "support@bidpack.co" ? "Technical Support" : "General"}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
