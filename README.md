# 🛒 TPF Final React JS - Tienda de Productos

📌 Proyecto Final de React JS desarrollado por Gustavo Caravajal  
🔗 [Sitio en vivo](https://tpf-inal-react-js.vercel.app/)

---

## 📝 Descripción

Esta aplicación es una **tienda de productos** construida con **React**, que incluye:

- Catálogo de productos por categorías.
- Detalle individual de productos.
- Carrito de compras con cantidad de productos, total y checkout.
- Panel de administración para **alta de productos**.
- Sistema de **Login y rutas protegidas** con React Router.

El proyecto utiliza **Context API** para manejar el carrito de compras y la sesión de usuario.

---

## 🚀 Tecnologías

- React 18  
- React Router DOM  
- Context API (para carrito y autenticación)  
- Fetch API para CRUD de productos con MockAPI  
- CSS modular para componentes  
- Despliegue en **Vercel**  

---

## 📁 Estructura del Proyecto
```
src/
├─ components/
│ ├─ adminComponents/
│ │ └─ ProductFormContainer/
│ │ └─ ProductFormUI/
│ ├─ Cart/
│ ├─ Count/
│ ├─ Footer/
│ ├─ Form/
│ ├─ Header/
│ ├─ Item/
│ ├─ ItemDetail/
│ ├─ ItemDetailContainer/
│ ├─ ItemList/
│ ├─ ItemListContainer/
│ ├─ Login/
│ ├─ Nav/
│ ├─ RutaProtegida/
├─ context/
│ ├─ AuthContext/
│ └─ CartContext/
├─ layouts/
│ ├─ AdminLayout.jsx
│ └─ MainLayout.jsx
├─ services/
│ ├─ products.js
│ └─ uploadImage.js
├─ utils/
│ └─ validateProducts.js
├─ App.jsx
└─ index.jsx
```

---

## 🔑 Funcionalidades Principales

### 🛍️ Catálogo y Productos

- Listado de productos en la página principal y por categoría.  
- Visualización de detalle del producto con cantidad y opción de agregar al carrito.

### 🛒 Carrito de Compras

- Agregar productos con cantidad.  
- Eliminar productos o vaciar el carrito.  
- Mostrar total a pagar y cantidad de productos.  
- Confirmación de compra con alerta.

### 🔑 Login y Panel Administrativo

- Login con usuario `admin` y contraseña `1234`.
- **Rutas protegidas**: solo usuarios autenticados pueden acceder a `/admin/alta-productos`.
- Formulario de **alta de productos**:
  - Nombre, precio, categoría, descripción e imagen.
  - Validación de campos antes de enviar.
  - Subida de imagen a Imgbb.
  - Creación de producto mediante API (MockAPI).

### 📂 Context API

- **CartContext**: gestión del carrito (agregar, eliminar, vaciar, total, checkout).  
- **AuthContext**: gestión de sesión de usuario, login y logout.

---

## ⚡ Instalación y Ejecución Local

### 1. Clonar el repositorio


git clone https://github.com/tu-usuario/tpf-final-react-js.git
cd tpf-final-react-js
### 2. Instalar dependencias
npm install
# o
yarn

### 3. Ejecutar la aplicación
npm start
# o
yarn start


La app correrá en http://localhost:3000.

📦 Scripts Disponibles
Script	Descripción
npm start	    Ejecuta la app en modo desarrollo
npm run build	Genera la versión de producción
npm test	    Ejecuta tests (si se agregan)
npm run lint	Corre linter (si está configurado)

🌐 Despliegue

La app está desplegada como SPA en Vercel.
Asegúrate de que React Router esté configurado correctamente para evitar errores 404 al refrescar rutas internas.
