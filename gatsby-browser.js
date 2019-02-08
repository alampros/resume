import 'styles/main.css'

export const onClientEntry = () => {
  let pass
  try {
    const supports = CSS.supports('(--foo: red)')
    pass = supports
  } catch(err) {
  }
  if(!pass) {
    console.warn('Browser did not pass minimum tests.')
    try {
      document.getElementById('bad-experience-banner').style.display = pass ? 'none' : 'block'
    } catch(err) {
    }
  }
}
