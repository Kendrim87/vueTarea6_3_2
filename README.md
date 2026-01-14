# Tarea 6.3.2: Utilización de props en componentes con rutas

## Enunciado

Modifica el código del caso práctico para que se utilicen props para los parámetros de las URL, en lugar de tener que acceder a `this.$route.params`.

**Claves de resolución:**

- Debes modificar las rutas en el archivo `main.js`.
- Recuerda que debes crear una prop con el mismo nombre que el parámetro al que quieras tener acceso.

## Estructura del Proyecto

### Estructura de Carpetas

```text
src/
├── App.vue                  # Componente raíz con router-view
├── main.js                  # Configuración de la aplicación y rutas
├── estado.js               # Estado centralizado con Reactivity API
└── components/
    ├── Listado.vue         # Componente de listado de personas
    ├── DetallePerson.vue   # Componente de detalle de una persona
    └── EditarPersona.vue   # Componente de formulario de edición
```

### Estado Centralizado (estado.js)

El archivo `estado.js` utiliza la función `reactive()` de Vue para crear un estado centralizado que es accesible desde todos los componentes:

```javascript
export const datos = reactive({
  personas: [...],  // Array de personas
  
  obtenerPersona(id) {
    return this.personas.find(p => p.id === id);
  },
  
  actualizarPersona(datosActualizados) {
    // Actualiza los datos de una persona
```

## Instalación y Ejecución

### Instalación de dependencias

```bash
npm install
```

### Desarrollo

```bash
npm run serve
```

### Build para producción

```bash
npm run build
```

## Acceso a la aplicación

- **Desarrollo**: `http://localhost:8080/`
- **Producción**: `http://localhost/DWEC/UT06/Tarea6_3_2/`
