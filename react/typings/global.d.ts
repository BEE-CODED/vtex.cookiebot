interface Window extends Window {
  __cookiebot_id: string
  __cookiebot_cdn: string
  Cookiebot: Cookiebot
}

interface Cookiebot {
  runScripts: () => void
}
