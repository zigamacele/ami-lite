import useSeasonalAnime from '../hooks/useSeasonalAnime'

const Home: React.FC = () => {
  const { seasonalAnime, isFetching } = useSeasonalAnime()

  console.log(seasonalAnime, isFetching)
  return (
    <div>
      {!isFetching &&
        seasonalAnime.Page.media.map((media) => (
          <div
            onClick={() =>
              window.open(
                `https://myanimelist.net/animelist/username?s=${media.title.userPreferred}`,
                '_blank',
                'top=500,left=200,width=1200,frame=true,nodeIntegration=true',
              )
            }
          >
            {media.title.userPreferred}
          </div>
        ))}
    </div>
  )
}

export default Home
