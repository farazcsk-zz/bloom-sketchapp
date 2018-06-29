import * as React from 'react';
import { render, Page, Document } from 'react-sketchapp';

import Colors from './pages/Colors';

export default () => {
  render(
    <Document>
      <Page name="Colors">
        <Colors />
      </Page>
    </Document>,
    context.document,
  );
};
