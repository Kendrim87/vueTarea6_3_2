const { defineConfig } = require('@vue/cli-service')

const isProd = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  transpileDependencies: true,
  // En prod servimos los assets desde la ruta real del build en el servidor Apache
  publicPath: isProd ? '/DWEC/UT06/Tarea6_3_2/vue6/dist/' : '/',
  // Dejamos el build en la carpeta dist del proyecto
  outputDir: 'dist'
})
