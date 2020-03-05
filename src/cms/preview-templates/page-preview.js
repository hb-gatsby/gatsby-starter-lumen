// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const PagePreview = ({ entry, widgetFor }: Props) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{ body }</div>
    </div>
  );
};

export default PagePreview;
