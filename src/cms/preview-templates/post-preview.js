// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const PostPreview = ({ entry, widgetFor }: Props) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__body">{body}</div>
    </div>
  );
};

export default PostPreview;
