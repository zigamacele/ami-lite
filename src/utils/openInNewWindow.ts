export const openInNewWindow = (mediaTitle: string) => {
  window.open(
    `https://myanimelist.net/animelist/username?s=${mediaTitle}`,
    '_blank',
    'top=500,left=200,width=1200,frame=true,nodeIntegration=true',
  )
}
