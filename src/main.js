import * as React from 'react';
import { render, Page, Document } from 'react-sketchapp';

import Colors from './pages/Colors';
import Typography from './pages/Typography';

export default () => {
  render(
    <Document>
      <Page name="Colors">
        <Colors />
      </Page>
      <Page name="Typography">
        <Typography />
      </Page>
    </Document>,
    context.document,
  );
};
