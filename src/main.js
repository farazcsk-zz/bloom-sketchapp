import * as React from 'react';
import { render, Page, Document } from 'react-sketchapp';

import Colors from './pages/Colors';
import Typography from './pages/Typography';
import Iconography from './pages/Iconography';

export default () => {
  render(
    <Document>
      <Page name="Colors">
        <Colors />
      </Page>
      <Page name="Typography">
        <Typography />
      </Page>
      <Page name="Iconography">
        <Iconography />
      </Page>
    </Document>,
    context.document,
  );
};
