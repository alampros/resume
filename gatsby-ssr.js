/* eslint-disable react/no-danger */
import React from 'react'
import { extractStyles } from 'evergreen-ui'

export const onRenderBody = ({ setHeadComponents }) => {
  const { css, hydrationScript } = extractStyles()

  setHeadComponents([
    <React.Fragment key="evergreen-ssr">
      <style id="evergreen-css" dangerouslySetInnerHTML={{ __html: css }} />
      {hydrationScript}
    </React.Fragment>,
  ])
}
