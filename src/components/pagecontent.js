import React from 'react';
// Here we are importing a CSS file as a dependency


function PageContent() {
  return (
<div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>This is the PageContent Page</h1>
    </div>
  );
}

export default PageContent;