# App Music Deezer

## Configuración del Proyecto

### Instalación de dependencias
```
npm install
```

### Configuración archivo secrets.js
``` javascript
// src/secrets.js

export default {
  API_DEEZER: {
    X_RAPIDAPI_HOST: 'X_RAPIDAPI_HOST',
    X_RAPIDAPI_KEY: 'X_RAPIDAPI_KEY'
  }
}
```

Para mas información consultar en la pagina de __[RapidAPI](https://rapidapi.com/)__

### Compilación en modo desarrollo
```
npm run serve
```

### Compilación en modo producción
```
npm run build
```

### Advertencias y Errores
```
npm run lint
```