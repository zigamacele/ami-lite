const seasons: { [key: string]: number[] } = {
  WINTER: [0, 1, 2],
  SPRING: [3, 4, 5],
  SUMMER: [6, 7, 8],
  FALL: [9, 10, 11],
}

export const currentAnimeSeason = (currentMonth: number) => {
  for (const season in seasons) {
    if (seasons[season].includes(currentMonth)) {
      return season
    }
  }
}
