import * as React from 'react';
import { FC } from 'react';

const SellerStoreEditor: FC = ({ children }) => (
  <div className="editor">
    <div className="editor__content">{children}</div>
  </div>
);

export default SellerStoreEditor;
