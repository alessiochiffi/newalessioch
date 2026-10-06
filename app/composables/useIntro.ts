export function useIntro() {
  const introLoaded = useState('introLoaded', () => false)

  function removeIntro() {
    introLoaded.value = true
  }

  return { introLoaded, removeIntro }
}
