import app from './src/app'
import config from './src/config'

app.listen(config.PORT, () => {
  console.log(`App listening at http://localhost:${config.PORT}`)
})