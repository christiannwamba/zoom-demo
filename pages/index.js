import React from 'react';
import { getAppContext } from '../helpers/cipher';

function Index({ isZoom }) {
  if (isZoom) {
    return <div>Welcome to your Zoom App</div>;
  } else {
    return (
      <div>
        You are viewing your Zoom App through the browser.&nbsp;
        <a href="/api/install"> Click Here</a> &nbsp;to install your app in Zoom.
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const zoomContextHeader = context.req.headers['x-zoom-app-context'];
  const isZoom = zoomContextHeader && getAppContext(zoomContextHeader);
  const name = isZoom ? 'Zoom' : 'Browser';

  return {
    props: {
      isZoom: !!isZoom,
      name,
    },
  }; // do something
}

export default Index;
