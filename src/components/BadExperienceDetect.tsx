import React from 'react'

/**
 * This is hidden by default. It's `display` style is set to `block` at runtime
 * by `gatsby-browser.js`.
 */
export default class BadExperienceDetect extends React.Component<React.HTMLProps<HTMLElement>> {
  componentDidMount() {
    try {
      const supports = CSS.supports('(--foo: red)')
      this.setState({
        pass: supports,
      })
    } catch(err) {
      this.setState({
        pass: false,
      })
    }
  }

  render() {
    const s = {
      container: {
        backgroundColor: '#FCBDBD',
        border: '2px solid #C92F0C',
        color: '#000',
        padding: '1rem 2rem',
        borderRadius: 4,
        marginBottom: '2rem',
        display: 'none',
      },
      h1: {
        lineHeight: 1.2,
        marginTop: 0,
      },
      a: {
        color: '#0641A5',
        textDecoration: 'underline',
      },
    }
    return (
      <aside style={s.container} id="bad-experience-banner">
        <h1 style={s.h1}>
          Your experience on this page might suffer due to your questionable browser choice.
        </h1>
        <div>
          Get a <a href="https://www.google.com/chrome/browser/desktop/" style={s.a}>better</a> <a href="https://www.mozilla.com/firefox/" style={s.a}>one</a>.
        </div>
      </aside>
    )
  }
}
