# Maestro Eulises

Monorepo con capas separadas:

| Capa | Stack | Carpeta |
| --- | --- | --- |
| Frontend | Angular 22 SPA (estático para Nginx) | `frontend/` |
| Backend | Spring Boot **3.5** + Java **17** + Tomcat embebido | `backend/` |

No hay SSR en el frontend: el build genera archivos estáticos. En producción Nginx sirve el SPA y hace proxy de `/api` hacia Spring Boot.

El Java local del equipo puede ser 11: el script `backend/scripts/ensure-jdk17.ps1` descarga Eclipse Temurin 17 en `backend/.jdk` y lo usa solo para compilar/ejecutar el API.

## Arranque rápido (desarrollo)

### 1. Backend (puerto 8080 — Tomcat embebido)

```bash
npm run backend:build
npm run backend:start
```

Health check: [http://localhost:8080/api/health](http://localhost:8080/api/health)

### 2. Frontend (puerto 4200)

```bash
cd frontend
npm install
npm start
```

El proxy (`frontend/proxy.conf.json`) reenvía `/api/*` a `http://localhost:8080`.

## Despliegue frontend (Cloudflare Pages)

Ideal para el SPA Angular estático. El backend Spring Boot **no** corre en Pages (hay que hospedarlo aparte o usar solo WhatsApp/contacto externo).

### Ajustes en el dashboard de Pages

| Campo | Valor |
| --- | --- |
| Root directory | `frontend` |
| Build command | `npm ci && npm run build` |
| Build output directory | `dist/portal-esoterico/browser` |
| Node version | `20` (variable `NODE_VERSION=20`) |

Archivos incluidos en `frontend/public/` (se copian al build):

- `_redirects` — rutas SPA (`/servicios/:id`, etc.)
- `_headers` — caché de assets

### Dominio

Conecta `maestroeulises.com` / `www` en Cloudflare y, si hace falta, actualiza `site.url` en `frontend/src/app/config/site.ts`.

### API (`/api`)

Pages solo sirve estáticos. Opciones:

1. **Por ahora:** el sitio funciona con WhatsApp; el formulario de contacto fallará hasta tener API.
2. **Después:** hospeda el JAR Spring Boot en un VPS/Railway/Render y apunta un Worker o un subdominio `api.` hacia ese backend.

## Despliegue (Nginx + Spring Boot)

```bash
# Frontend estático
npm --prefix frontend run build
# Salida: frontend/dist/portal-esoterico/browser

# Backend JAR
npm run backend:build
# Salida: backend/target/*.jar
java -jar backend/target/portal-esoterico-api-0.0.1-SNAPSHOT.jar
```

Copia el contenido de `frontend/dist/portal-esoterico/browser` al `root` de Nginx.
Usa como base el ejemplo: `deploy/nginx.conf.example`.

## API principal

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Estado del servicio |
| `POST` | `/api/contact` | Formulario de consulta (validación + honeypot) |
| `POST` | `/api/payments/checkout` | Checkout preparado (Stripe / Mercado Pago / PayPal) |

Las claves secretas de pago viven **solo** en el backend (`PAYMENTS_SECRET_KEY`). Nunca en el frontend.

## Configuración

### Frontend

- `frontend/src/app/config/site.ts` — marca, WhatsApp, textos, `apiEndpoint: '/api/contact'`
- `frontend/src/app/data/*` — servicios, FAQ, testimonios
- `frontend/proxy.conf.json` — proxy de desarrollo

### Backend

- `backend/src/main/resources/application.yml` — puerto, CORS, inbox, pagos
- Variables opcionales: `PAYMENTS_PUBLIC_KEY`, `PAYMENTS_SECRET_KEY`

## Scripts raíz

```bash
npm run backend:jdk     # asegura JDK 17+
npm run backend:build   # mvnw package con JDK 17
npm run backend:test    # tests Spring Boot
npm run backend:start   # spring-boot:run (Tomcat embebido)
npm run frontend:start  # ng serve + proxy
npm run frontend:build  # build SPA estático
npm run build           # backend + frontend
```

## Aviso

Los servicios se presentan como prácticas espirituales, esotéricas y/o de entretenimiento. No se garantizan resultados. `/privacidad` y `/terminos` son plantillas editables, no asesoramiento legal.
