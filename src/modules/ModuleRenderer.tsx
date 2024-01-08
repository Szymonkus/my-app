import { FC } from "react";
import { InvoiceModuleProps } from "./InvoiceModule";
import { UserModuleProps } from "./UserModule";
import { InvoiceModule } from "./InvoiceModule";
import { UserModule } from "./UserModule";

export type ModuleProps = UserModuleProps | InvoiceModuleProps;

export const ModuleRenderer: FC<ModuleProps> = (props) => {
  const { moduleType } = props;

  switch (moduleType) {
    case 'invoiceModule':
      return <InvoiceModule {...props as InvoiceModuleProps} />;
    case 'userModule':
      return <UserModule {...props as UserModuleProps} />;
    default:
      return null;
  }
};
