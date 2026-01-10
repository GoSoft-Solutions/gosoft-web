# GoSoft Solutions Landing Page

Una landing page corporativa moderna y segura construida con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript para mayor robustez del código
- **Estilos**: Tailwind CSS para diseño responsive y moderno
- **Seguridad**: Headers de seguridad, protección CSRF, CSP
- **SEO**: Metadatos optimizados y estructura semántica
- **Iconos**: Heroicons React para iconografía consistente

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página principal (en construcción)
│   ├── layout.tsx         # Layout principal
│   └── policies/          # Páginas de políticas
│       ├── privacy-policy/
│       ├── terms-conditions/
│       ├── cookie-policy/
│       └── ...
├── components/            # Componentes reutilizables
│   ├── PolicyNavigation.tsx
│   └── PolicyLayout.tsx
└── ...
```

## 📄 Páginas de Políticas Incluidas

- **Aviso de Privacidad** (`/policies/privacy-policy`)
- **Términos y Condiciones** (`/policies/terms-conditions`) 
- **Política de Cookies** (`/policies/cookie-policy`)
- **Aviso Legal** (`/policies/legal-disclaimer`)
- **Política de Divulgación de Vulnerabilidades** (`/policies/vulnerability-disclosure`)
- **Política de Protección de Datos** (`/policies/data-protection`)
- **Política de Calidad** (`/policies/quality-policy`)
- **Política Ambiental** (`/policies/environmental-policy`)

## 🛡️ Funciones de Seguridad

- **Headers de Seguridad**: X-Frame-Options, CSP, X-XSS-Protection
- **Middleware de Seguridad**: Protección CSRF, cookies seguras
- **Content Security Policy**: Configurado para prevenir XSS
- **Configuración Segura**: Headers personalizados en next.config.ts

## 🚦 Inicio Rápido

### Prerrequisitos
- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start
```

### Desarrollo

El servidor de desarrollo se ejecuta en [http://localhost:3000](http://localhost:3000).

## 🎨 Personalización

### Branding
- Actualiza los colores de marca en [tailwind.config.ts](tailwind.config.ts)
- Modifica el logo y nombre de empresa en [src/app/page.tsx](src/app/page.tsx)

### Políticas
- Edita el contenido de las políticas en `/src/app/policies/*/page.tsx`
- Actualiza la información de contacto en todos los archivos

### Configuración de Seguridad
- Ajusta los headers en [next.config.ts](next.config.ts)
- Modifica el middleware en [middleware.ts](middleware.ts)

## 📚 Próximos Pasos

1. **Contenido**: Completar las páginas de políticas con contenido específico
2. **Branding**: Agregar logo, colores y tipografía de la marca
3. **Funcionalidades**: Implementar formularios de contacto
4. **SEO**: Optimizar metadatos y agregar sitemap
5. **Analytics**: Integrar herramientas de análisis
6. **Deployment**: Configurar CI/CD para producción

## 🤝 Contribución

Este es un proyecto interno de GoSoft Solutions. Para contribuir:

1. Clona el repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

## 📝 Licencia

© 2026 GoSoft Solutions. Todos los derechos reservados.

## 🔧 Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Lenguaje de programación tipado
- **Tailwind CSS** - Framework de CSS utilitario
- **Heroicons** - Biblioteca de iconos
- **ESLint** - Linter para JavaScript/TypeScript

---

**Estado**: 🚧 En construcción - La página principal muestra un mensaje de "sitio en construcción" mientras se desarrolla el contenido completo.
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
