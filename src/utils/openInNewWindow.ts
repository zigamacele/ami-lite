export const openUpdateWindow = (
  mediaId: number,
  mediaTitle: string,
  username: string | null,
  platform: boolean,
) => {
  window.open(
    !platform
      ? `https://myanimelist.net/animelist/${username}?s=${mediaTitle}`
      : `https://anilist.co/anime/${mediaId}/`,
    '_blank',
    'top=500,left=200,width=1200,frame=true,nodeIntegration=true',
  )
}

export const openTrailerWindow = (mediaTitle: string) => {
  window.open(
    `https://www.youtube.com/results?search_query=${mediaTitle}+trailer+english+sub`,
    '_blank',
    'top=500,left=200,width=1200,frame=true,nodeIntegration=true',
  )
}
