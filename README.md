## Mapa con Marcadores Personalizados leidos desde lista creada con Sharepoint

Inicializa un mapa con marcadores personalizados basados en datos csv convertidos en geoJson, los cuales muestran un detalle de alerta cuando se hace clic en ellos.

[Lector-de-Contenidos-Locales.webm](https://github.com/user-attachments/assets/f56bc388-843c-4c5a-ae75-bd52d87cca68)


### Ejecutarlo

    git clone https://github.com/mapbox/mapbox-react-examples.git

    cd mapbox-react-examples/markers-custom
    npm install
    npm start

    abre http://localhost:3000/

### Token de acceso

    mapboxgl.accessToken = // TU_API_KEY_AQUÍ

Reemplaza la [clave API](https://docs.mapbox.com/help/getting-started/access-tokens/) en `src/Map.js`.

La aplicación se ejecuta desde http://localhost:3000
