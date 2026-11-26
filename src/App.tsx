import { useState, useEffect, useRef } from 'react';
import type { SVGProps } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  Server,
  LayoutDashboard,
  Database,
  ShieldCheck,
  Award,
  GraduationCap,
  Briefcase,
  CodeXml,
  Globe,
  Cpu,
  Layers,
  ChevronRight,
  X,
  Menu,
  BookOpen,
  Sparkles,
  Play,
  RotateCcw,
  Sun,
  Moon,
  Command,
  CheckCircle2,
  ArrowRight,
  Activity,
  Lock,
  FileDown
} from 'lucide-react';

type IconProps = SVGProps<SVGSVGElement>;

const Github = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const Linkedin = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const CV_FILE_PATH = '/CV_Eduardo_Perez_2026.pdf';
const AVATAR_FILE_PATH = '/avatar.jpg';

interface ArchitectureNode {
  id: string;
  label: string;
  tech: string;
  role: string;
  description: string;
  flow: string;
}

interface ProjectItem {
  id: string;
  name: string;
  url: string;
  domain: string;
  screenshot: string;
  category: string;
  shortDesc: string;
  highlights: string[];
  nodes: ArchitectureNode[];
  tags: string[];
}

interface QaTestCase {
  id: string;
  runner: string;
  name: string;
  detail: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  projectContext: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

type SkillCategoryId = 'backend' | 'frontend' | 'databases' | 'devops';
type SkillTabId = 'all' | SkillCategoryId;

interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  description: string;
  items: string[];
}

interface CredentialItem {
  type: string;
  title: string;
  detail: string;
  credentialLabel: string;
  credentialValue: string;
  date: string;
}

interface AcademicItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

interface LanguageItem {
  language: string;
  level: string;
  detail: string;
}

interface PortfolioLocale {
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    credentials: string;
    education: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    role: string;
    location: string;
    summary: string;
    ctaProjects: string;
    ctaCv: string;
    ctaTerminal: string;
    ctaCopy: string;
    ctaCopied: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewLive: string;
    clickNodeHint: string;
    items: ProjectItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    simulatorTitle: string;
    simulatorSubtitle: string;
    runSuite: string;
    runningSuite: string;
    resetSuite: string;
    suiteReady: string;
    suitePassed: string;
    testCases: QaTestCase[];
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    subtitle: string;
    clearSelection: string;
    selectedTechPrefix: string;
    generalStackLabel: string;
    tabs: { id: SkillTabId; label: string }[];
    categories: SkillCategory[];
  };
  credentials: {
    title: string;
    subtitle: string;
    copyId: string;
    copiedId: string;
    items: CredentialItem[];
  };
  education: {
    title: string;
    subtitle: string;
    academic: AcademicItem[];
    languages: LanguageItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    rights: string;
  };
  terminal: {
    title: string;
    placeholder: string;
    hint: string;
    welcome: string;
  };
}

interface TerminalEntry {
  cmd: string;
  output: string[];
}

const PORTFOLIO_DATA: { es: PortfolioLocale; en: PortfolioLocale } = {
  es: {
    nav: {
      about: 'Perfil',
      projects: 'Arquitectura & Proyectos',
      experience: 'QA & Experiencia',
      skills: 'Matriz Stack',
      credentials: 'Ponencias & Cert.',
      education: 'Educación',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Disponible para oportunidades Full-Stack & QA',
      name: 'Eduardo Yoshihiko Pérez Iwanaga',
      role: 'Desarrollador de Software Full-Stack | Backend & Aseguramiento de Calidad (QA)',
      location: 'Quito, Ecuador',
      summary:
        'Estudiante de Desarrollo de Software en la Universidad UTE, enfocado en el desarrollo Full-Stack y el Aseguramiento de Calidad (QA). Especializado en la construcción de arquitecturas backend escalables con NestJS y Python (FastAPI/Django), desarrollo frontend moderno con React y TypeScript, gestión de bases de datos relacionales y documentales (PostgreSQL y MongoDB), automatización de pruebas y despliegue continuo en servidores Linux.',
      ctaProjects: 'Explorar Arquitectura',
      ctaCv: 'Descargar CV (PDF)',
      ctaTerminal: 'Abrir Terminal (Ctrl+K)',
      ctaCopy: 'Copiar Correo',
      ctaCopied: 'Correo Copiado'
    },
    projects: {
      title: 'Explorador Interactivo de Proyectos en Producción',
      subtitle:
        'Haz clic en cada nodo de la arquitectura para inspeccionar el flujo de datos, decisiones técnicas y despliegue en servidores Linux.',
      viewLive: 'Visitar Sitio en Vivo',
      clickNodeHint: 'Selecciona un nodo del diagrama para ver los detalles técnicos de esa capa:',
      items: [
        {
          id: 'pixelstore',
          name: 'PixelStore — Plataforma E-Commerce Full-Stack',
          url: 'https://pixeltech.uaeftt-ute.site',
          domain: 'pixeltech.uaeftt-ute.site',
          screenshot: '/pixelstore.jpg',
          category: 'Full-Stack · Persistencia Políglota · IA',
          shortDesc:
            'Arquitectura modular de comercio electrónico con persistencia políglota (PostgreSQL + MongoDB), autenticación OAuth 2.0, pagos con PayPal y comparador inteligente impulsado por Google Gemini.',
          highlights: [
            'Desarrollo de arquitectura modular con persistencia políglota utilizando TypeScript, NestJS, React, PostgreSQL y MongoDB.',
            'Integración de autenticación OAuth 2.0, pasarela de pagos PayPal y comparador inteligente impulsado por Google Gemini.',
            'Implementación de pipelines CI/CD con GitHub Actions y despliegue automatizado en servidor Linux VPS con PM2 y Nginx.'
          ],
          nodes: [
            {
              id: 'ps-frontend',
              label: 'Frontend SPA',
              tech: 'React + TypeScript',
              role: 'Capa de Presentación',
              description:
                'Interfaz de comercio electrónico modular tipada con TypeScript para exploración de catálogo, flujo de compra y visualización del comparador inteligente.',
              flow: 'Cliente Web ↔ API RESTful (HTTPS / JSON)'
            },
            {
              id: 'ps-backend',
              label: 'API & Seguridad',
              tech: 'NestJS + OAuth 2.0 + PayPal',
              role: 'Núcleo de Negocio',
              description:
                'Arquitectura modular en NestJS que gestiona autenticación delegada con OAuth 2.0, reglas comerciales, logística integrada y procesamiento de pagos con PayPal.',
              flow: 'React Client → NestJS Controllers/Services → Servicios Externos & BD'
            },
            {
              id: 'ps-data',
              label: 'Persistencia Políglota',
              tech: 'PostgreSQL + MongoDB',
              role: 'Almacenamiento Híbrido',
              description:
                'Combinación de PostgreSQL para integridad transaccional (usuarios, órdenes y pagos) con MongoDB para estructuras flexibles de catálogo y atributos variables.',
              flow: 'NestJS Repositories ↔ PostgreSQL (Relacional) + MongoDB (Documental)'
            },
            {
              id: 'ps-ai',
              label: 'Comparador Inteligente',
              tech: 'Google Gemini API',
              role: 'Procesamiento Inteligente',
              description:
                'Módulo de comparación asistida por Google Gemini que analiza especificaciones técnicas de productos para facilitar decisiones de compra.',
              flow: 'Selección de Productos → NestJS AI Service → Google Gemini → Respuesta Estructurada'
            },
            {
              id: 'ps-devops',
              label: 'CI/CD & Linux VPS',
              tech: 'GitHub Actions + Nginx + PM2',
              role: 'Despliegue Continuo',
              description:
                'Automatización de integración y entrega continua mediante GitHub Actions hacia servidor Linux VPS administrado con PM2 y proxy inverso Nginx.',
              flow: 'Git Push → GitHub Actions Pipeline → Linux VPS (PM2 + Nginx)'
            }
          ],
          tags: [
            'TypeScript',
            'NestJS',
            'React',
            'PostgreSQL',
            'MongoDB',
            'OAuth 2.0',
            'PayPal',
            'Google Gemini',
            'GitHub Actions',
            'PM2',
            'Nginx',
            'Linux (Ubuntu/Mint)'
          ]
        },
        {
          id: 'yozenspa',
          name: 'Yözen Spa — Plataforma Web Comercial y Gestión Operativa',
          url: 'https://yozens.shop',
          domain: 'yozens.shop',
          screenshot: '/yozenspa.jpg',
          category: 'Web Corporativa · Cloud & Automatización',
          shortDesc:
            'Plataforma web corporativa en producción sobre Ubuntu VPS con Nginx, SSL y Cloudflare, optimizada con SEO local y atención automatizada mediante asistente virtual.',
          highlights: [
            'Desarrollo y despliegue en producción de plataforma web corporativa sobre Ubuntu VPS con Nginx, SSL y Cloudflare.',
            'Implementación de estrategia SEO local y automatización de atención al cliente mediante asistente virtual.'
          ],
          nodes: [
            {
              id: 'yz-web',
              label: 'Plataforma Comercial',
              tech: 'HTML5 + CSS3 + Web Corporativa',
              role: 'Presencia Digital & Operación',
              description:
                'Sitio comercial diseñado para conversión de servicios, presentación de catálogo operativo y captación de clientes locales.',
              flow: 'Visitante → Cloudflare Edge → Plataforma Web Yözen Spa'
            },
            {
              id: 'yz-assistant',
              label: 'Asistente Virtual',
              tech: 'Automatización de Atención',
              role: 'Soporte Automatizado',
              description:
                'Flujo automatizado de atención al cliente para responder consultas frecuentes y agilizar la gestión operativa del negocio.',
              flow: 'Consulta Cliente → Asistente Virtual → Respuesta / Gestión Operativa'
            },
            {
              id: 'yz-seo',
              label: 'SEO Local',
              tech: 'Optimización Web & Posicionamiento',
              role: 'Visibilidad Orgánica',
              description:
                'Estrategia técnica de SEO local orientada a búsquedas geolocalizadas y rendimiento de carga.',
              flow: 'Motores de Búsqueda → Metadatos & Estructura Semántica → Tráfico Orgánico'
            },
            {
              id: 'yz-infra',
              label: 'Infraestructura Cloud',
              tech: 'Ubuntu VPS + Nginx + SSL + Cloudflare',
              role: 'Seguridad & Disponibilidad',
              description:
                'Servidor Ubuntu VPS endurecido con proxy inverso Nginx, certificados SSL y protección DNS/CDN mediante Cloudflare.',
              flow: 'Internet → Cloudflare (DNS/SSL) → Nginx Reverse Proxy → Ubuntu VPS'
            }
          ],
          tags: [
            'Linux (Ubuntu/Mint)',
            'Nginx',
            'SSL',
            'Cloudflare',
            'SEO Local',
            'Asistente Virtual',
            'HTML5',
            'CSS3'
          ]
        }
      ]
    },
    experience: {
      title: 'Experiencia Profesional & Simulador de Suite QA',
      subtitle:
        'Durante mi pasantía en OpenLAB (Sep. 2025 – Feb. 2026) aseguré la calidad de software mediante pruebas unitarias en Odoo y automatización E2E con Cypress.',
      simulatorTitle: 'Simulador Interactivo de Ejecución QA (OpenLAB / EPMSA)',
      simulatorSubtitle:
        'Ejecuta una demostración interactiva de los flujos de validación unitaria y funcional E2E aplicados en mi rol de QA.',
      runSuite: 'Ejecutar Suite de Pruebas',
      runningSuite: 'Ejecutando pruebas...',
      resetSuite: 'Reiniciar',
      suiteReady: 'Listo para ejecutar 4 escenarios de verificación (Odoo Unit + Cypress E2E).',
      suitePassed: 'Suite completada: 4/4 pruebas verificadas sin errores.',
      testCases: [
        {
          id: 'UNIT-01',
          runner: 'Odoo Unit Test',
          name: 'Validación de reglas e integridad de lógica de negocio en módulo Odoo',
          detail: 'Verificación aislada de métodos de modelo, restricciones de campos y cálculo de estados.'
        },
        {
          id: 'UNIT-02',
          runner: 'Odoo Unit Test',
          name: 'Control de excepciones y consistencia de registros transaccionales',
          detail: 'Comprobación de manejo de entradas inválidas y rollback limpio ante fallos de validación.'
        },
        {
          id: 'E2E-01',
          runner: 'Cypress E2E',
          name: 'Flujo funcional completo de autenticación y navegación de usuario',
          detail: 'Automatización en navegador real verificando renderizado, permisos de vista y tiempos de respuesta.'
        },
        {
          id: 'E2E-02',
          runner: 'Cypress E2E',
          name: 'Detección temprana de regresiones en formularios críticos del sistema',
          detail: 'Aserciones sobre DOM, peticiones XHR/Fetch y mensajes de confirmación de extremo a extremo.'
        }
      ],
      items: [
        {
          role: 'Pasante de Aseguramiento de Calidad (QA) y Desarrollo',
          company: 'OpenLAB',
          projectContext: 'Proyecto EPMSA',
          period: 'Sep. 2025 – Feb. 2026',
          location: 'Quito, Ecuador',
          bullets: [
            'Diseño y ejecución de pruebas unitarias en entornos Odoo, garantizando la integridad de la lógica de negocio.',
            'Automatización de pruebas funcionales utilizando Cypress, optimizando la detección temprana de errores.',
            'Soporte técnico en desarrollo, depuración y mantenimiento de soluciones de software.'
          ],
          tags: [
            'Cypress',
            'Pruebas Unitarias y Funcionales',
            'Odoo',
            'Python',
            'Git / GitLab'
          ]
        }
      ]
    },
    skills: {
      title: 'Matriz Interactiva de Habilidades Técnicas',
      subtitle:
        'Filtra por categoría o haz clic en cualquier tecnología para ver dónde la he aplicado (proyectos en producción o experiencia QA).',
      clearSelection: 'Limpiar selección',
      selectedTechPrefix: 'Aplicado en:',
      generalStackLabel: 'Parte del stack técnico verificado en CV',
      tabs: [
        { id: 'all', label: 'Todo el Stack' },
        { id: 'backend', label: 'Backend & APIs' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'databases', label: 'Bases de Datos' },
        { id: 'devops', label: 'QA, DevOps & Cloud' }
      ],
      categories: [
        {
          id: 'backend',
          title: 'Backend & APIs',
          description: 'Diseño de servicios modulares, autenticación segura e integración de APIs.',
          items: ['TypeScript', 'NestJS', 'Python', 'FastAPI', 'Django', 'APIs RESTful', 'OAuth 2.0']
        },
        {
          id: 'frontend',
          title: 'Frontend',
          description: 'Interfaces web modernas, reactivas y enfocadas en rendimiento.',
          items: ['React', 'HTML5', 'CSS3', 'Vite']
        },
        {
          id: 'databases',
          title: 'Bases de Datos',
          description: 'Modelado relacional y documental, consultas y optimización.',
          items: ['PostgreSQL', 'MongoDB']
        },
        {
          id: 'devops',
          title: 'QA, DevOps & Cloud',
          description: 'Automatización de pruebas, contenedores, servidores Linux y CI/CD.',
          items: [
            'Cypress',
            'Pruebas Unitarias y Funcionales',
            'Linux (Ubuntu/Mint)',
            'Nginx',
            'PM2',
            'Docker',
            'GitHub Actions',
            'Git / GitLab'
          ]
        }
      ]
    },
    credentials: {
      title: 'Ponencias Científicas y Certificaciones',
      subtitle: 'Divulgación académica y credenciales técnicas verificables con copia rápida de ID.',
      copyId: 'Copiar ID',
      copiedId: 'ID Copiado',
      items: [
        {
          type: 'Ponencia Oral Internacional',
          title: 'Ponente — III Simposio Internacional de Ciencia Abierta 2026',
          detail:
            'Ponencia oral: «PixelStore: Una arquitectura modular de comercio electrónico con procesamiento inteligente para la gestión comercial y logística integrada».',
          credentialLabel: 'Credencial',
          credentialValue: 'CERT-2026-0403',
          date: 'Nov. 2026'
        },
        {
          type: 'Certificación Verificada',
          title: 'Introduction to Cybersecurity — Cisco Networking Academy',
          detail:
            'Certificación verificada en Credly. Ciberseguridad, vulnerabilidades de red, detección de amenazas y confidencialidad de datos.',
          credentialLabel: 'Credly ID',
          credentialValue: '5ccb9efd-e9a6-44f6-a29d-ac8512c6d67c',
          date: 'Oct. 2025'
        }
      ]
    },
    education: {
      title: 'Educación e Idiomas',
      subtitle: 'Formación universitaria en ingeniería de software y competencias lingüísticas.',
      academic: [
        {
          degree: 'Desarrollo de Software (Ingeniería en Tecnologías de la Información)',
          institution: 'Universidad UTE',
          location: 'Quito, Ecuador',
          period: '2024 – Presente'
        },
        {
          degree: 'Bachiller en Ciencias',
          institution: 'Unidad Educativa «Carlos Zambrano O.»',
          location: 'Quito, Ecuador',
          period: '2024'
        }
      ],
      languages: [
        {
          language: 'Español',
          level: 'Nativo',
          detail: 'Lengua materna'
        },
        {
          language: 'Inglés',
          level: 'Nivel B1 (Intermedio)',
          detail: 'Certificado por EF Education First'
        }
      ]
    },
    contact: {
      title: 'Contacto Directo & Enlaces Verificados',
      subtitle:
        'Copia con un clic cualquiera de mis canales oficiales o accede directamente a mis repositorios y perfiles académicos.',
      ctaTitle: '¿Construimos software confiable juntos?',
      ctaSubtitle:
        'Abierto a roles de Desarrollo Full-Stack, Backend y Aseguramiento de Calidad (QA) en equipos locales e internacionales.',
      rights: 'Eduardo Yoshihiko Pérez Iwanaga · Quito, Ecuador'
    },
    terminal: {
      title: 'eduardo@quito-vps:~ — Terminal Interactiva',
      placeholder: 'Escribe un comando (ej. help, cv, pixelstore, yozenspa, github, linkedin)...',
      hint: 'Comandos: help, about, projects, qa, stack, credentials, contact, cv, pixelstore, yozenspa, github, linkedin, lang es, lang en, theme, clear',
      welcome:
        'Bienvenido a la consola interactiva de Eduardo Pérez Iwanaga. Escribe "help" para ver los comandos disponibles o haz clic en un atajo abajo.'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Architecture & Projects',
      experience: 'QA & Experience',
      skills: 'Tech Matrix',
      credentials: 'Talks & Certs',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      badge: 'Open to Full-Stack & QA Engineering Roles',
      name: 'Eduardo Yoshihiko Pérez Iwanaga',
      role: 'Full-Stack Software Developer | Backend & Quality Assurance (QA)',
      location: 'Quito, Ecuador',
      summary:
        'Software Development student at Universidad UTE focused on Full-Stack development and Quality Assurance (QA). Specialized in building scalable backend architectures with NestJS and Python (FastAPI/Django), modern frontend development with React and TypeScript, relational and document database management (PostgreSQL and MongoDB), test automation, and continuous deployment on Linux servers.',
      ctaProjects: 'Explore Architecture',
      ctaCv: 'Download CV (PDF)',
      ctaTerminal: 'Open Terminal (Ctrl+K)',
      ctaCopy: 'Copy Email',
      ctaCopied: 'Email Copied'
    },
    projects: {
      title: 'Interactive Production Projects Explorer',
      subtitle:
        'Click any architecture node to inspect data flow, engineering decisions, and Linux server deployment.',
      viewLive: 'Visit Live Site',
      clickNodeHint: 'Select a diagram node to inspect that architectural layer:',
      items: [
        {
          id: 'pixelstore',
          name: 'PixelStore — Full-Stack E-Commerce Platform',
          url: 'https://pixeltech.uaeftt-ute.site',
          domain: 'pixeltech.uaeftt-ute.site',
          screenshot: '/pixelstore.jpg',
          category: 'Full-Stack · Polyglot Persistence · AI',
          shortDesc:
            'Modular e-commerce architecture with polyglot persistence (PostgreSQL + MongoDB), OAuth 2.0 authentication, PayPal checkout, and an intelligent comparator powered by Google Gemini.',
          highlights: [
            'Built a modular architecture with polyglot persistence using TypeScript, NestJS, React, PostgreSQL, and MongoDB.',
            'Integrated OAuth 2.0 authentication, PayPal payment gateway, and an AI-powered product comparator using Google Gemini.',
            'Implemented CI/CD pipelines with GitHub Actions and automated deployment on a Linux VPS with PM2 and Nginx.'
          ],
          nodes: [
            {
              id: 'ps-frontend',
              label: 'Frontend SPA',
              tech: 'React + TypeScript',
              role: 'Presentation Layer',
              description:
                'Strictly typed modular e-commerce interface built with React and TypeScript for catalog browsing, checkout flow, and intelligent product comparison.',
              flow: 'Web Client ↔ RESTful API (HTTPS / JSON)'
            },
            {
              id: 'ps-backend',
              label: 'API & Security',
              tech: 'NestJS + OAuth 2.0 + PayPal',
              role: 'Core Business Logic',
              description:
                'Modular NestJS backend orchestrating OAuth 2.0 delegated authentication, commercial & logistics workflows, and PayPal payment processing.',
              flow: 'React Client → NestJS Controllers/Services → External Services & DBs'
            },
            {
              id: 'ps-data',
              label: 'Polyglot Persistence',
              tech: 'PostgreSQL + MongoDB',
              role: 'Hybrid Storage Layer',
              description:
                'Combines PostgreSQL for relational transactional integrity (users, orders, payments) with MongoDB for flexible product catalog attributes.',
              flow: 'NestJS Repositories ↔ PostgreSQL (Relational) + MongoDB (Document)'
            },
            {
              id: 'ps-ai',
              label: 'Smart Comparator',
              tech: 'Google Gemini API',
              role: 'Intelligent Processing',
              description:
                'AI-assisted comparison service powered by Google Gemini that evaluates product specifications to guide purchasing decisions.',
              flow: 'Product Selection → NestJS AI Service → Google Gemini → Structured Output'
            },
            {
              id: 'ps-devops',
              label: 'CI/CD & Linux VPS',
              tech: 'GitHub Actions + Nginx + PM2',
              role: 'Continuous Deployment',
              description:
                'Automated build and deployment pipelines via GitHub Actions targeting a Linux VPS managed with PM2 and Nginx reverse proxy.',
              flow: 'Git Push → GitHub Actions Pipeline → Linux VPS (PM2 + Nginx)'
            }
          ],
          tags: [
            'TypeScript',
            'NestJS',
            'React',
            'PostgreSQL',
            'MongoDB',
            'OAuth 2.0',
            'PayPal',
            'Google Gemini',
            'GitHub Actions',
            'PM2',
            'Nginx',
            'Linux (Ubuntu/Mint)'
          ]
        },
        {
          id: 'yozenspa',
          name: 'Yözen Spa — Commercial Web Platform & Operations',
          url: 'https://yozens.shop',
          domain: 'yozens.shop',
          screenshot: '/yozenspa.jpg',
          category: 'Corporate Web · Cloud & Automation',
          shortDesc:
            'Production corporate web platform hosted on Ubuntu VPS with Nginx, SSL, and Cloudflare, enhanced with local SEO strategy and virtual assistant customer support automation.',
          highlights: [
            'Developed and deployed a production corporate web platform on Ubuntu VPS with Nginx, SSL, and Cloudflare.',
            'Implemented a local SEO strategy and customer service automation via a virtual assistant.'
          ],
          nodes: [
            {
              id: 'yz-web',
              label: 'Commercial Platform',
              tech: 'HTML5 + CSS3 + Corporate Web',
              role: 'Digital Presence & Operations',
              description:
                'Production commercial platform tailored for service presentation, operational workflows, and local customer conversion.',
              flow: 'Visitor → Cloudflare Edge → Yözen Spa Web Platform'
            },
            {
              id: 'yz-assistant',
              label: 'Virtual Assistant',
              tech: 'Support Automation',
              role: 'Automated Customer Care',
              description:
                'Automated customer service assistant streamlining inquiries and operational appointment guidance.',
              flow: 'Customer Inquiry → Virtual Assistant → Automated Guidance'
            },
            {
              id: 'yz-seo',
              label: 'Local SEO',
              tech: 'Web Optimization & Indexing',
              role: 'Organic Visibility',
              description:
                'Technical local SEO strategy focused on geo-targeted search visibility and fast page load performance.',
              flow: 'Search Engines → Semantic Structure & Metadata → Organic Traffic'
            },
            {
              id: 'yz-infra',
              label: 'Cloud Infrastructure',
              tech: 'Ubuntu VPS + Nginx + SSL + Cloudflare',
              role: 'Security & Availability',
              description:
                'Ubuntu VPS production server configured with Nginx reverse proxy, SSL encryption, and Cloudflare DNS/CDN protection.',
              flow: 'Internet → Cloudflare (DNS/SSL) → Nginx Reverse Proxy → Ubuntu VPS'
            }
          ],
          tags: [
            'Linux (Ubuntu/Mint)',
            'Nginx',
            'SSL',
            'Cloudflare',
            'Local SEO',
            'Virtual Assistant',
            'HTML5',
            'CSS3'
          ]
        }
      ]
    },
    experience: {
      title: 'Professional Experience & Interactive QA Runner',
      subtitle:
        'During my internship at OpenLAB (Sep. 2025 – Feb. 2026), I ensured software reliability through Odoo unit testing and Cypress E2E functional test automation.',
      simulatorTitle: 'Interactive QA Test Suite Runner (OpenLAB / EPMSA)',
      simulatorSubtitle:
        'Run an interactive simulation of the unit and functional E2E validation workflows applied in my QA role.',
      runSuite: 'Run Test Suite',
      runningSuite: 'Running tests...',
      resetSuite: 'Reset',
      suiteReady: 'Ready to execute 4 verification scenarios (Odoo Unit + Cypress E2E).',
      suitePassed: 'Suite completed: 4/4 checks passed with zero regressions.',
      testCases: [
        {
          id: 'UNIT-01',
          runner: 'Odoo Unit Test',
          name: 'Business logic integrity & model rules validation in Odoo module',
          detail: 'Isolated verification of model methods, field constraints, and state transitions.'
        },
        {
          id: 'UNIT-02',
          runner: 'Odoo Unit Test',
          name: 'Exception handling & transactional record consistency check',
          detail: 'Verification of invalid input handling and clean rollback on validation errors.'
        },
        {
          id: 'E2E-01',
          runner: 'Cypress E2E',
          name: 'End-to-end authentication and user navigation functional flow',
          detail: 'Real-browser automation verifying rendering, view permissions, and response behavior.'
        },
        {
          id: 'E2E-02',
          runner: 'Cypress E2E',
          name: 'Early regression detection across critical system forms',
          detail: 'DOM assertions, XHR/Fetch interception, and end-to-end confirmation checks.'
        }
      ],
      items: [
        {
          role: 'Quality Assurance (QA) & Development Intern',
          company: 'OpenLAB',
          projectContext: 'EPMSA Project',
          period: 'Sep. 2025 – Feb. 2026',
          location: 'Quito, Ecuador',
          bullets: [
            'Designed and executed unit tests in Odoo environments, ensuring business logic integrity.',
            'Automated functional end-to-end tests using Cypress, optimizing early defect detection.',
            'Provided technical support in software development, debugging, and maintenance.'
          ],
          tags: [
            'Cypress',
            'Unit & Functional Testing',
            'Odoo',
            'Python',
            'Git / GitLab'
          ]
        }
      ]
    },
    skills: {
      title: 'Interactive Technical Stack Matrix',
      subtitle:
        'Filter by domain or click any technology to highlight where I have applied it (production projects or QA experience).',
      clearSelection: 'Clear selection',
      selectedTechPrefix: 'Applied in:',
      generalStackLabel: 'Verified in technical CV stack',
      tabs: [
        { id: 'all', label: 'All Stack' },
        { id: 'backend', label: 'Backend & APIs' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'databases', label: 'Databases' },
        { id: 'devops', label: 'QA, DevOps & Cloud' }
      ],
      categories: [
        {
          id: 'backend',
          title: 'Backend & APIs',
          description: 'Modular service design, secure authentication, and REST API engineering.',
          items: ['TypeScript', 'NestJS', 'Python', 'FastAPI', 'Django', 'RESTful APIs', 'OAuth 2.0']
        },
        {
          id: 'frontend',
          title: 'Frontend',
          description: 'Modern, responsive, and high-performance web interfaces.',
          items: ['React', 'HTML5', 'CSS3', 'Vite']
        },
        {
          id: 'databases',
          title: 'Databases',
          description: 'Relational and document modeling, querying, and optimization.',
          items: ['PostgreSQL', 'MongoDB']
        },
        {
          id: 'devops',
          title: 'QA, DevOps & Cloud',
          description: 'Test automation, containers, Linux servers, and CI/CD pipelines.',
          items: [
            'Cypress',
            'Unit & Functional Testing',
            'Linux (Ubuntu/Mint)',
            'Nginx',
            'PM2',
            'Docker',
            'GitHub Actions',
            'Git / GitLab'
          ]
        }
      ]
    },
    credentials: {
      title: 'Scientific Talks & Certifications',
      subtitle: 'Academic speaking engagements and verified industry credentials with one-click ID copy.',
      copyId: 'Copy ID',
      copiedId: 'ID Copied',
      items: [
        {
          type: 'International Oral Presentation',
          title: 'Speaker — III International Symposium on Open Science 2026',
          detail:
            'Oral presentation: "PixelStore: A Modular E-Commerce Architecture with Intelligent Processing for Integrated Commercial and Logistics Management".',
          credentialLabel: 'Credential',
          credentialValue: 'CERT-2026-0403',
          date: 'Nov. 2026'
        },
        {
          type: 'Verified Certification',
          title: 'Introduction to Cybersecurity — Cisco Networking Academy',
          detail:
            'Verified certification on Credly. Cybersecurity fundamentals, network vulnerabilities, threat detection, and data confidentiality.',
          credentialLabel: 'Credly ID',
          credentialValue: '5ccb9efd-e9a6-44f6-a29d-ac8512c6d67c',
          date: 'Oct. 2025'
        }
      ]
    },
    education: {
      title: 'Education & Languages',
      subtitle: 'Academic background in software engineering and language proficiency.',
      academic: [
        {
          degree: 'Software Development (Information Technology Engineering)',
          institution: 'Universidad UTE',
          location: 'Quito, Ecuador',
          period: '2024 – Present'
        },
        {
          degree: 'High School Diploma in Sciences (Bachiller en Ciencias)',
          institution: 'Unidad Educativa "Carlos Zambrano O."',
          location: 'Quito, Ecuador',
          period: '2024'
        }
      ],
      languages: [
        {
          language: 'Spanish',
          level: 'Native',
          detail: 'Mother tongue'
        },
        {
          language: 'English',
          level: 'B1 Level (Intermediate)',
          detail: 'Certified by EF Education First'
        }
      ]
    },
    contact: {
      title: 'Direct Contact & Verified Links',
      subtitle:
        'One-click copy for any official contact channel or direct access to repositories and academic profiles.',
      ctaTitle: 'Let’s build reliable software together.',
      ctaSubtitle:
        'Open to Full-Stack Development, Backend Engineering, and Quality Assurance (QA) opportunities.',
      rights: 'Eduardo Yoshihiko Pérez Iwanaga · Quito, Ecuador'
    },
    terminal: {
      title: 'eduardo@quito-vps:~ — Interactive Terminal',
      placeholder: 'Type a command (e.g., help, cv, pixelstore, yozenspa, github, linkedin)...',
      hint: 'Commands: help, about, projects, qa, stack, credentials, contact, cv, pixelstore, yozenspa, github, linkedin, lang es, lang en, theme, clear',
      welcome:
        'Welcome to Eduardo Pérez Iwanaga’s interactive console. Type "help" to list commands or click a quick shortcut below.'
    }
  }
};

type Lang = keyof typeof PORTFOLIO_DATA;
type Theme = 'dark' | 'light';
type QaStatus = 'idle' | 'running' | 'completed';

const TECH_USAGE_MAP: Record<string, string[]> = {
  TypeScript: ['PixelStore (pixeltech.uaeftt-ute.site)'],
  NestJS: ['PixelStore (pixeltech.uaeftt-ute.site)'],
  React: ['PixelStore (pixeltech.uaeftt-ute.site)'],
  PostgreSQL: ['PixelStore (pixeltech.uaeftt-ute.site)'],
  MongoDB: ['PixelStore (pixeltech.uaeftt-ute.site)'],
  'OAuth 2.0': ['PixelStore (pixeltech.uaeftt-ute.site)'],
  'APIs RESTful': ['PixelStore (pixeltech.uaeftt-ute.site)'],
  'RESTful APIs': ['PixelStore (pixeltech.uaeftt-ute.site)'],
  HTML5: ['PixelStore', 'Yözen Spa (yozens.shop)'],
  CSS3: ['PixelStore', 'Yözen Spa (yozens.shop)'],
  Vite: ['Frontend Tooling (CV Stack)'],
  Python: ['Backend APIs & Odoo QA (OpenLAB)'],
  FastAPI: ['Backend APIs (CV Stack)'],
  Django: ['Backend APIs (CV Stack)'],
  Cypress: ['OpenLAB — Proyecto EPMSA (QA Automation)'],
  'Pruebas Unitarias y Funcionales': ['OpenLAB — Proyecto EPMSA (Odoo Unit & Cypress E2E)'],
  'Unit & Functional Testing': ['OpenLAB — Proyecto EPMSA (Odoo Unit & Cypress E2E)'],
  'Linux (Ubuntu/Mint)': ['PixelStore VPS', 'Yözen Spa Ubuntu VPS'],
  Nginx: ['PixelStore VPS', 'Yözen Spa Ubuntu VPS'],
  PM2: ['PixelStore Linux VPS'],
  Docker: ['DevOps & Containers (CV Stack)'],
  'GitHub Actions': ['PixelStore CI/CD Pipelines'],
  'Git / GitLab': ['PixelStore', 'OpenLAB QA & Desarrollo']
};

export default function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [theme, setTheme] = useState<Theme>('dark');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeSkillTab, setActiveSkillTab] = useState<SkillTabId>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedNodes, setSelectedNodes] = useState<Record<string, string>>({
    pixelstore: 'ps-backend',
    yozenspa: 'yz-infra'
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [qaStatus, setQaStatus] = useState<QaStatus>('idle');
  const [completedTests, setCompletedTests] = useState<string[]>([]);
  const [activeTestIndex, setActiveTestIndex] = useState<number>(-1);

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([]);
  const terminalInputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const t = PORTFOLIO_DATA[lang];
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => terminalInputRef.current?.focus(), 60);
    }
  }, [terminalOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  useEffect(() => {
    if (qaStatus !== 'running') return;
    const total = t.experience.testCases.length;

    if (activeTestIndex >= total) {
      setQaStatus('completed');
      setActiveTestIndex(-1);
      return;
    }

    const timer = setTimeout(() => {
      const currentCase = t.experience.testCases[activeTestIndex];
      if (currentCase) {
        setCompletedTests((prev) => [...prev, currentCase.id]);
      }
      setActiveTestIndex((prev) => prev + 1);
    }, 520);

    return () => clearTimeout(timer);
  }, [qaStatus, activeTestIndex, t.experience.testCases]);

  const handleRunQaSuite = () => {
    setCompletedTests([]);
    setActiveTestIndex(0);
    setQaStatus('running');
  };

  const handleResetQaSuite = () => {
    setQaStatus('idle');
    setCompletedTests([]);
    setActiveTestIndex(-1);
  };

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const scrollToSection = (id: string) => {
    setTerminalOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openExternalUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const triggerCvDownload = () => {
    const link = document.createElement('a');
    link.href = CV_FILE_PATH;
    link.download = 'CV_Eduardo_Perez_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const executeTerminalCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;
    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    let outputLines: string[] = [];

    if (lower === 'help') {
      outputLines = [
        lang === 'es' ? 'Comandos disponibles:' : 'Available commands:',
        '  about        → ' + (lang === 'es' ? 'Resumen de perfil profesional' : 'Professional profile summary'),
        '  projects     → ' + (lang === 'es' ? 'Ir a PixelStore y Yözen Spa' : 'Jump to PixelStore & Yözen Spa'),
        '  qa           → ' + (lang === 'es' ? 'Ir a experiencia OpenLAB y ejecutar suite QA' : 'Jump to OpenLAB & run QA suite'),
        '  stack        → ' + (lang === 'es' ? 'Ir a matriz de habilidades técnicas' : 'Jump to technical stack matrix'),
        '  credentials  → ' + (lang === 'es' ? 'Ver ponencia 2026 y certificación Cisco' : 'View 2026 talk & Cisco certification'),
        '  contact      → ' + (lang === 'es' ? 'Mostrar correo, teléfono, GitHub, LinkedIn y ORCID' : 'Show email, phone, GitHub, LinkedIn & ORCID'),
        '  cv           → ' + (lang === 'es' ? 'Descargar CV en PDF' : 'Download CV PDF'),
        '  pixelstore   → ' + (lang === 'es' ? 'Abrir PixelStore en nueva pestaña' : 'Open PixelStore in a new tab'),
        '  yozenspa     → ' + (lang === 'es' ? 'Abrir Yözen Spa en nueva pestaña' : 'Open Yözen Spa in a new tab'),
        '  github       → ' + (lang === 'es' ? 'Abrir GitHub en nueva pestaña' : 'Open GitHub in a new tab'),
        '  linkedin     → ' + (lang === 'es' ? 'Abrir LinkedIn en nueva pestaña' : 'Open LinkedIn in a new tab'),
        '  lang es | en → ' + (lang === 'es' ? 'Cambiar idioma de la interfaz' : 'Switch interface language'),
        '  theme        → ' + (lang === 'es' ? 'Alternar modo oscuro / claro' : 'Toggle dark / light theme'),
        '  clear        → ' + (lang === 'es' ? 'Limpiar consola' : 'Clear console')
      ];
    } else if (lower === 'about') {
      outputLines = [
        'Eduardo Yoshihiko Pérez Iwanaga — Quito, Ecuador',
        t.hero.role,
        'Universidad UTE (2024 - Presente) | English B1 (EF Education First) | Spanish (Native)'
      ];
      scrollToSection('about');
    } else if (lower === 'projects') {
      outputLines = [
        '1. PixelStore (https://pixeltech.uaeftt-ute.site) — NestJS, React, PostgreSQL, MongoDB, OAuth 2.0, PayPal, Google Gemini, CI/CD',
        '2. Yözen Spa (https://yozens.shop) — Ubuntu VPS, Nginx, SSL, Cloudflare, Local SEO, Virtual Assistant'
      ];
      scrollToSection('projects');
    } else if (lower === 'qa') {
      outputLines = [
        'OpenLAB (Sep. 2025 – Feb. 2026) — Proyecto EPMSA',
        'Iniciando simulación de pruebas unitarias Odoo y Cypress E2E...'
      ];
      scrollToSection('experience');
      handleRunQaSuite();
    } else if (lower === 'stack') {
      outputLines = [
        'Backend: TypeScript, NestJS, Python, FastAPI, Django, APIs RESTful, OAuth 2.0',
        'Frontend: React, HTML5, CSS3, Vite',
        'Databases: PostgreSQL, MongoDB',
        'QA & DevOps: Cypress, Unit/Functional Tests, Linux (Ubuntu/Mint), Nginx, PM2, Docker, GitHub Actions, Git/GitLab'
      ];
      scrollToSection('skills');
    } else if (lower === 'credentials') {
      outputLines = [
        '• Ponente III Simposio Internacional de Ciencia Abierta 2026 (CERT-2026-0403)',
        '• Cisco Networking Academy — Introduction to Cybersecurity (Credly: 5ccb9efd-e9a6-44f6-a29d-ac8512c6d67c)'
      ];
      scrollToSection('credentials');
    } else if (lower === 'contact') {
      outputLines = [
        'Email:    yochanperez@gmail.com',
        'Phone:    +593 98 780 5762',
        'GitHub:   https://github.com/yochanperez',
        'LinkedIn: https://linkedin.com/in/eduardo-iwanaga',
        'ORCID:    0009-0004-3658-2724'
      ];
      scrollToSection('contact');
    } else if (lower === 'cv') {
      triggerCvDownload();
      outputLines = [
        lang === 'es'
          ? `Descargando ${CV_FILE_PATH}...`
          : `Downloading ${CV_FILE_PATH}...`
      ];
    } else if (lower === 'pixelstore') {
      const url = 'https://pixeltech.uaeftt-ute.site';
      openExternalUrl(url);
      outputLines = [
        lang === 'es'
          ? `Abriendo PixelStore (${url}) en una nueva pestaña...`
          : `Opening PixelStore (${url}) in a new tab...`
      ];
    } else if (lower === 'yozenspa') {
      const url = 'https://yozens.shop';
      openExternalUrl(url);
      outputLines = [
        lang === 'es'
          ? `Abriendo Yözen Spa (${url}) en una nueva pestaña...`
          : `Opening Yözen Spa (${url}) in a new tab...`
      ];
    } else if (lower === 'github') {
      const url = 'https://github.com/yochanperez';
      openExternalUrl(url);
      outputLines = [
        lang === 'es'
          ? `Abriendo GitHub (${url}) en una nueva pestaña...`
          : `Opening GitHub (${url}) in a new tab...`
      ];
    } else if (lower === 'linkedin') {
      const url = 'https://linkedin.com/in/eduardo-iwanaga';
      openExternalUrl(url);
      outputLines = [
        lang === 'es'
          ? `Abriendo LinkedIn (${url}) en una nueva pestaña...`
          : `Opening LinkedIn (${url}) in a new tab...`
      ];
    } else if (lower === 'lang es') {
      setLang('es');
      outputLines = ['Idioma actualizado a Español (ES).'];
    } else if (lower === 'lang en') {
      setLang('en');
      outputLines = ['Language switched to English (EN).'];
    } else if (lower === 'theme') {
      const nextTheme: Theme = isDark ? 'light' : 'dark';
      setTheme(nextTheme);
      outputLines = [
        lang === 'es'
          ? `Tema cambiado a modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}.`
          : `Theme switched to ${nextTheme} mode.`
      ];
    } else {
      outputLines = [
        lang === 'es'
          ? `Comando no reconocido: "${cmd}". Escribe "help" para ver opciones.`
          : `Command not found: "${cmd}". Type "help" for available commands.`
      ];
    }

    setTerminalHistory((prev) => [...prev, { cmd, output: outputLines }]);
    setTerminalInput('');
  };

  const filteredCategories =
    activeSkillTab === 'all'
      ? t.skills.categories
      : t.skills.categories.filter((cat) => cat.id === activeSkillTab);

  const getCategoryIcon = (id: SkillCategoryId) => {
    switch (id) {
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'frontend':
        return <LayoutDashboard className="w-5 h-5 text-cyan-500" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'devops':
        return <ShieldCheck className="w-5 h-5 text-cyan-500" />;
    }
  };

  const surfaceCard = isDark
    ? 'border-zinc-800 bg-zinc-900/60 text-zinc-100'
    : 'border-zinc-200 bg-white/90 text-zinc-900 shadow-sm';

  const subSurface = isDark
    ? 'border-zinc-800 bg-zinc-950/90'
    : 'border-zinc-200 bg-zinc-50';

  const mutedText = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bodyText = isDark ? 'text-zinc-300' : 'text-zinc-700';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans antialiased selection:bg-emerald-500/30 ${
        isDark
          ? 'bg-zinc-950 text-zinc-100 selection:text-emerald-200'
          : 'bg-slate-50 text-zinc-900 selection:text-emerald-900'
      }`}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          opacity: isDark ? 0.28 : 0.45,
          backgroundImage: isDark
            ? 'radial-gradient(circle at 18% 12%, rgba(16, 185, 129, 0.16), transparent 36%), radial-gradient(circle at 85% 28%, rgba(6, 182, 212, 0.14), transparent 36%), linear-gradient(to right, rgba(63, 63, 70, 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(63, 63, 70, 0.22) 1px, transparent 1px)'
            : 'radial-gradient(circle at 18% 12%, rgba(16, 185, 129, 0.10), transparent 38%), radial-gradient(circle at 85% 28%, rgba(6, 182, 212, 0.10), transparent 38%), linear-gradient(to right, rgba(203, 213, 225, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.45) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px'
        }}
      />

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
          isDark
            ? 'border-zinc-800/80 bg-zinc-950/85'
            : 'border-zinc-200/90 bg-white/85'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <a
            href="#about"
            className="flex items-center gap-2.5 font-semibold tracking-tight group shrink-0"
          >
            <img
              src="/logo-eyp.png"
              alt="Logo EYPI"
              className="w-8 h-8 rounded-lg object-contain border border-emerald-500/40 bg-zinc-950/60 p-0.5"
            />
            <span className="font-mono text-sm hidden sm:inline">
              eduardo.perez<span className="text-emerald-500">()</span>
            </span>
          </a>

          <nav className={`hidden lg:flex items-center gap-5 text-xs font-medium ${mutedText}`}>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#experience" className="hover:text-emerald-500 transition-colors">
              {t.nav.experience}
            </a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#credentials" className="hover:text-emerald-500 transition-colors">
              {t.nav.credentials}
            </a>
            <a href="#education" className="hover:text-emerald-500 transition-colors">
              {t.nav.education}
            </a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTerminalOpen(true)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-mono text-xs transition-all cursor-pointer ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-300'
                  : 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:border-emerald-500 hover:text-emerald-700'
              }`}
              title="Open Interactive Terminal (Ctrl + K)"
            >
              <Command className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">CLI</span>
              <kbd
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  isDark
                    ? 'bg-zinc-950 text-zinc-400'
                    : 'bg-white text-zinc-500 border border-zinc-200'
                }`}
              >
                Ctrl+K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle color theme"
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-amber-300 hover:border-zinc-700'
                  : 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:border-zinc-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div
              role="group"
              aria-label="Language switcher"
              className={`inline-flex items-center rounded-lg border p-0.5 font-mono text-xs ${
                isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-100'
              }`}
            >
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'es'
                    ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 font-semibold'
                    : mutedText
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-cyan-500/20 text-cyan-500 border border-cyan-500/40 font-semibold'
                    : mutedText
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300'
                  : 'border-zinc-200 bg-white text-zinc-700'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t px-4 py-4 space-y-1.5 ${
              isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
            }`}
          >
            {[
              { href: '#projects', label: t.nav.projects },
              { href: '#experience', label: t.nav.experience },
              { href: '#skills', label: t.nav.skills },
              { href: '#credentials', label: t.nav.credentials },
              { href: '#education', label: t.nav.education },
              { href: '#contact', label: t.nav.contact }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  isDark
                    ? 'text-zinc-300 hover:bg-zinc-900 hover:text-emerald-400'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="about"
          className={`pt-14 pb-20 sm:pt-20 sm:pb-24 border-b ${
            isDark ? 'border-zinc-800/70' : 'border-zinc-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.hero.badge}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
                {t.hero.name}
              </h1>

              <p className="mt-4 text-lg sm:text-2xl font-semibold bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                {t.hero.role}
              </p>

              <div className={`mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono ${mutedText}`}>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  {t.hero.location}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-cyan-500" />
                  +593 98 780 5762
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-emerald-500" />
                  yochanperez@gmail.com
                </span>
              </div>

              <p className={`mt-6 text-base sm:text-lg leading-relaxed max-w-3xl ${bodyText}`}>
                {t.hero.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/15"
                >
                  <Layers className="w-4 h-4" />
                  {t.hero.ctaProjects}
                </a>

                <a
                  href={CV_FILE_PATH}
                  download="CV_Eduardo_Perez_2026.pdf"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border font-semibold text-sm transition-all ${
                    isDark
                      ? 'border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300'
                      : 'border-cyan-600/40 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 shadow-sm'
                  }`}
                >
                  <FileDown className="w-4 h-4" />
                  <span>{t.hero.ctaCv}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setTerminalOpen(true)}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border font-mono text-sm transition-all cursor-pointer ${
                    isDark
                      ? 'border-zinc-700 bg-zinc-900 hover:border-emerald-500/50 text-emerald-300'
                      : 'border-zinc-300 bg-white hover:border-emerald-500 text-emerald-700 shadow-sm'
                  }`}
                >
                  <Terminal className="w-4 h-4" />
                  <span>{t.hero.ctaTerminal}</span>
                </button>

                <button
                  type="button"
                  onClick={() => copyToClipboard('hero-email', 'yochanperez@gmail.com')}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border font-medium text-sm transition-all cursor-pointer ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-900/80 hover:border-zinc-600 text-zinc-200'
                      : 'border-zinc-200 bg-white hover:border-zinc-400 text-zinc-800 shadow-sm'
                  }`}
                >
                  {copiedKey === 'hero-email' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500">{t.hero.ctaCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>{t.hero.ctaCopy}</span>
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/yochanperez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm transition-all ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/40 text-zinc-300 hover:text-white'
                      : 'border-zinc-200 bg-white hover:border-emerald-500 text-zinc-700 hover:text-zinc-950'
                  }`}
                >
                  <Github className="w-4 h-4 text-emerald-500" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/eduardo-iwanaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm transition-all ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-900/60 hover:border-cyan-500/40 text-zinc-300 hover:text-white'
                      : 'border-zinc-200 bg-white hover:border-cyan-500 text-zinc-700 hover:text-zinc-950'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-cyan-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://orcid.org/0009-0004-3658-2724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-mono transition-all ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/40 text-zinc-300 hover:text-white'
                      : 'border-zinc-200 bg-white hover:border-emerald-500 text-zinc-700 hover:text-zinc-950'
                  }`}
                  title="ORCID: 0009-0004-3658-2724"
                >
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span>ORCID</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent blur-xl pointer-events-none" />
                <div
                  className={`relative p-[3px] rounded-full bg-gradient-to-tr from-emerald-500/85 via-cyan-400/75 to-teal-500/85 shadow-lg ${
                    isDark ? 'shadow-black/50' : 'shadow-zinc-300/60'
                  }`}
                >
                  <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden">
                    <img
                      src={AVATAR_FILE_PATH}
                      alt={t.hero.name}
                      className="w-full h-full object-cover object-[58%_25%] scale-125 origin-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`py-20 border-b ${isDark ? 'border-zinc-800/70' : 'border-zinc-200'}`}
        >
          <div className="mb-10">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>01 // System Architecture Explorer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.projects.title}</h2>
            <p className={`mt-2 max-w-3xl ${mutedText}`}>{t.projects.subtitle}</p>
          </div>

          <div className="space-y-10">
            {t.projects.items.map((project) => {
              const activeNodeId = selectedNodes[project.id] || project.nodes[0].id;
              const activeNode =
                project.nodes.find((n) => n.id === activeNodeId) || project.nodes[0];

              return (
                <article
                  key={project.id}
                  className={`rounded-2xl border overflow-hidden transition-all ${surfaceCard}`}
                >
                  <div
                    className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
                      isDark ? 'border-zinc-800 bg-zinc-950/90' : 'border-zinc-200 bg-zinc-100/90'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="font-mono text-xs text-emerald-500 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{project.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">{project.name}</h3>
                        <p className={`mt-2 text-sm sm:text-base max-w-3xl leading-relaxed ${bodyText}`}>
                          {project.shortDesc}
                        </p>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-colors shrink-0 self-start"
                      >
                        <span>{t.projects.viewLive}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                          <div className={`text-xs font-mono mb-3 ${mutedText}`}>
                            {t.projects.clickNodeHint}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.nodes.map((node, idx) => {
                              const isSelected = node.id === activeNode.id;
                              return (
                                <button
                                  key={node.id}
                                  type="button"
                                  onClick={() =>
                                    setSelectedNodes((prev) => ({
                                      ...prev,
                                      [project.id]: node.id
                                    }))
                                  }
                                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                                    isSelected
                                      ? isDark
                                        ? 'border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                                        : 'border-emerald-500 bg-emerald-50 shadow-sm'
                                      : isDark
                                      ? 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-600'
                                      : 'border-zinc-200 bg-zinc-50 hover:border-zinc-400'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-[11px] text-cyan-500 font-semibold">
                                      0{idx + 1} · {node.role}
                                    </span>
                                    <ChevronRight
                                      className={`w-4 h-4 transition-transform ${
                                        isSelected ? 'text-emerald-500 translate-x-0.5' : mutedText
                                      }`}
                                    />
                                  </div>
                                  <div className="mt-1 font-bold text-sm">{node.label}</div>
                                  <div className={`mt-1 font-mono text-xs ${mutedText}`}>
                                    {node.tech}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-4 block rounded-xl border overflow-hidden group ${
                            isDark
                              ? 'border-zinc-800 bg-zinc-950'
                              : 'border-zinc-200 bg-zinc-100'
                          }`}
                        >
                          <img
                            src={project.screenshot}
                            alt={`Captura de ${project.name}`}
                            loading="lazy"
                            className="w-full h-48 sm:h-56 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="px-3.5 py-2 flex items-center justify-between text-[11px] font-mono border-t border-zinc-800/60 bg-zinc-950/90 text-zinc-300">
                            <span>{project.domain}</span>
                            <span className="inline-flex items-center gap-1 text-emerald-400">
                              {t.projects.viewLive}
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        </a>
                      </div>

                      <div
                        className={`lg:col-span-5 rounded-xl border p-5 sm:p-6 flex flex-col justify-between ${subSurface}`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-800/40">
                            <span className="font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold">
                              Inspector // {activeNode.role}
                            </span>
                            <Activity className="w-4 h-4 text-cyan-500" />
                          </div>

                          <h4 className="mt-4 text-lg font-bold">{activeNode.label}</h4>
                          <div className="mt-1 inline-block font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
                            {activeNode.tech}
                          </div>

                          <p className={`mt-4 text-sm leading-relaxed ${bodyText}`}>
                            {activeNode.description}
                          </p>
                        </div>

                        <div
                          className={`mt-6 p-3.5 rounded-lg border font-mono text-xs ${
                            isDark
                              ? 'border-zinc-800 bg-zinc-900 text-emerald-300'
                              : 'border-zinc-200 bg-white text-emerald-700'
                          }`}
                        >
                          <div className={`text-[10px] uppercase mb-1 ${mutedText}`}>
                            Data / Deployment Flow
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <ArrowRight className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                            <span>{activeNode.flow}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`mt-6 pt-6 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                      <ul className="space-y-2">
                        {project.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className={`flex items-start gap-2 text-xs sm:text-sm ${bodyText}`}>
                            <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => {
                              setSelectedTech(tag);
                              scrollToSection('skills');
                            }}
                            className={`px-2.5 py-1 rounded-md border font-mono text-[11px] transition-colors cursor-pointer ${
                              isDark
                                ? 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-emerald-500/50'
                                : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-emerald-500'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="experience"
          className={`py-20 border-b ${isDark ? 'border-zinc-800/70' : 'border-zinc-200'}`}
        >
          <div className="mb-10">
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>02 // QA & Software Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.experience.title}</h2>
            <p className={`mt-2 max-w-3xl ${mutedText}`}>{t.experience.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              {t.experience.items.map((exp, idx) => (
                <div key={idx} className={`rounded-2xl border p-6 sm:p-7 ${surfaceCard}`}>
                  <div
                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b ${
                      isDark ? 'border-zinc-800' : 'border-zinc-200'
                    }`}
                  >
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-emerald-500">{exp.company}</span>
                        <span className={mutedText}>•</span>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
                          {exp.projectContext}
                        </span>
                      </div>
                    </div>
                    <div className={`font-mono text-xs sm:text-right ${mutedText}`}>
                      <div className="font-semibold text-emerald-500">{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.bullets.map((item, bIdx) => (
                      <li key={bIdx} className={`flex items-start gap-2.5 text-sm leading-relaxed ${bodyText}`}>
                        <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md border font-mono text-xs ${
                          isDark
                            ? 'bg-zinc-950 border-zinc-800 text-emerald-300'
                            : 'bg-zinc-100 border-zinc-200 text-emerald-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={`lg:col-span-6 rounded-2xl border overflow-hidden ${surfaceCard}`}>
              <div
                className={`px-5 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
                  isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <div>
                    <h3 className="text-sm font-bold">{t.experience.simulatorTitle}</h3>
                    <p className={`text-[11px] ${mutedText}`}>{t.experience.simulatorSubtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRunQaSuite}
                    disabled={qaStatus === 'running'}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-zinc-950 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>
                      {qaStatus === 'running' ? t.experience.runningSuite : t.experience.runSuite}
                    </span>
                  </button>

                  {qaStatus !== 'idle' && (
                    <button
                      type="button"
                      onClick={handleResetQaSuite}
                      className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                        isDark
                          ? 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                          : 'border-zinc-300 bg-white text-zinc-600 hover:text-zinc-950'
                      }`}
                      title={t.experience.resetSuite}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-5 space-y-3">
                {t.experience.testCases.map((tc, index) => {
                  const isPassed = completedTests.includes(tc.id);
                  const isRunningThis = qaStatus === 'running' && activeTestIndex === index;

                  return (
                    <div
                      key={tc.id}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isPassed
                          ? isDark
                            ? 'border-emerald-500/40 bg-emerald-500/10'
                            : 'border-emerald-400 bg-emerald-50'
                          : isRunningThis
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : subSurface
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-500 font-semibold">
                            {tc.runner}
                          </span>
                          <span className={mutedText}>{tc.id}</span>
                        </div>

                        <span className="font-mono text-xs">
                          {isPassed ? (
                            <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold">
                              <CheckCircle2 className="w-4 h-4" />
                              PASS
                            </span>
                          ) : isRunningThis ? (
                            <span className="text-cyan-500 animate-pulse">RUNNING...</span>
                          ) : (
                            <span className={mutedText}>READY</span>
                          )}
                        </span>
                      </div>

                      <div className="mt-2 text-xs sm:text-sm font-semibold">{tc.name}</div>
                      <p className={`mt-1 text-xs ${mutedText}`}>{tc.detail}</p>
                    </div>
                  );
                })}

                <div
                  className={`mt-2 px-3.5 py-2.5 rounded-lg border font-mono text-xs flex items-center justify-between ${
                    qaStatus === 'completed'
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
                      : `${subSurface} ${mutedText}`
                  }`}
                >
                  <span>
                    {qaStatus === 'completed' ? t.experience.suitePassed : t.experience.suiteReady}
                  </span>
                  <span className="font-semibold">
                    {completedTests.length}/{t.experience.testCases.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`py-20 border-b ${isDark ? 'border-zinc-800/70' : 'border-zinc-200'}`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">
                <CodeXml className="w-4 h-4" />
                <span>03 // Interactive Tech Stack Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{t.skills.title}</h2>
              <p className={`mt-2 max-w-2xl ${mutedText}`}>{t.skills.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.skills.tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSkillTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    activeSkillTab === tab.id
                      ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 font-semibold'
                      : isDark
                      ? 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                      : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {selectedTech && (
            <div
              className={`mb-6 p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
                isDark
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                  : 'border-emerald-400 bg-emerald-50 text-emerald-900'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="font-mono font-bold px-2.5 py-1 rounded bg-emerald-500 text-zinc-950">
                  {selectedTech}
                </span>
                <span className="font-semibold">{t.skills.selectedTechPrefix}</span>
                <span className="font-mono">
                  {(TECH_USAGE_MAP[selectedTech] || [t.skills.generalStackLabel]).join(' · ')}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="text-xs font-mono underline hover:opacity-80 cursor-pointer"
              >
                {t.skills.clearSelection}
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category) => (
              <div key={category.id} className={`rounded-2xl border p-6 ${surfaceCard}`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${subSurface}`}
                  >
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                    <p className={`text-xs ${mutedText}`}>{category.description}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => {
                    const isSelected = selectedTech === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => setSelectedTech(isSelected ? null : skill)}
                        className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-500 text-zinc-950 border-emerald-400 font-bold shadow-md shadow-emerald-500/20'
                            : isDark
                            ? 'bg-zinc-950 border-zinc-800 text-zinc-200 hover:border-emerald-500/50'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-emerald-500'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="credentials"
          className={`py-20 border-b ${isDark ? 'border-zinc-800/70' : 'border-zinc-200'}`}
        >
          <div className="mb-10">
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>04 // Verified Credentials & Publications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.credentials.title}</h2>
            <p className={`mt-2 max-w-2xl ${mutedText}`}>{t.credentials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.credentials.items.map((item, idx) => {
              const copyKey = `cred-${idx}`;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 flex flex-col justify-between ${surfaceCard}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-500">
                        <Sparkles className="w-3.5 h-3.5" />
                        {item.type}
                      </span>
                      <span className={`font-mono text-xs ${mutedText}`}>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                    <p className={`mt-2.5 text-sm leading-relaxed ${bodyText}`}>{item.detail}</p>
                  </div>

                  <div
                    className={`mt-5 pt-4 border-t flex items-center justify-between gap-2 font-mono text-xs ${
                      isDark ? 'border-zinc-800' : 'border-zinc-200'
                    }`}
                  >
                    <div className="truncate">
                      <span className={mutedText}>{item.credentialLabel}: </span>
                      <span className="text-cyan-500 font-semibold">{item.credentialValue}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(copyKey, item.credentialValue)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border shrink-0 transition-colors cursor-pointer ${
                        isDark
                          ? 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-cyan-500/50'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-cyan-500'
                      }`}
                    >
                      {copiedKey === copyKey ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">{t.credentials.copiedId}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{t.credentials.copyId}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="education"
          className={`py-20 border-b ${isDark ? 'border-zinc-800/70' : 'border-zinc-200'}`}
        >
          <div className="mb-10">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>05 // Academic & Languages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.education.title}</h2>
            <p className={`mt-2 ${mutedText}`}>{t.education.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {t.education.academic.map((edu, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${surfaceCard}`}
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">{edu.degree}</h3>
                    <p className="text-sm text-emerald-500 font-semibold mt-1">{edu.institution}</p>
                    <p className={`text-xs mt-0.5 ${mutedText}`}>{edu.location}</p>
                  </div>
                  <span
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg border self-start sm:self-center shrink-0 ${subSurface}`}
                  >
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl border p-6 ${surfaceCard}`}>
              <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-wider mb-4">
                <Globe className="w-4 h-4" />
                <span>{lang === 'es' ? 'Idiomas' : 'Languages'}</span>
              </div>

              <div className="space-y-3">
                {t.education.languages.map((l, idx) => (
                  <div key={idx} className={`p-3.5 rounded-xl border ${subSurface}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{l.language}</span>
                      <span className="font-mono text-xs text-emerald-500 font-semibold">
                        {l.level}
                      </span>
                    </div>
                    <p className={`text-xs mt-1 ${mutedText}`}>{l.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>06 // Direct Contact & Verified Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.contact.title}</h2>
            <p className={`mt-2 max-w-2xl ${mutedText}`}>{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                key: 'email',
                label: 'Email',
                value: 'yochanperez@gmail.com',
                href: 'mailto:yochanperez@gmail.com',
                icon: <Mail className="w-4 h-4 text-emerald-500" />
              },
              {
                key: 'phone',
                label: lang === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp',
                value: '+593 98 780 5762',
                href: 'tel:+593987805762',
                icon: <Phone className="w-4 h-4 text-cyan-500" />
              },
              {
                key: 'github',
                label: 'GitHub',
                value: 'github.com/yochanperez',
                href: 'https://github.com/yochanperez',
                icon: <Github className="w-4 h-4 text-emerald-500" />
              },
              {
                key: 'linkedin',
                label: 'LinkedIn',
                value: 'linkedin.com/in/eduardo-iwanaga',
                href: 'https://linkedin.com/in/eduardo-iwanaga',
                icon: <Linkedin className="w-4 h-4 text-cyan-500" />
              },
              {
                key: 'orcid',
                label: 'ORCID',
                value: '0009-0004-3658-2724',
                href: 'https://orcid.org/0009-0004-3658-2724',
                icon: <BookOpen className="w-4 h-4 text-emerald-500" />
              }
            ].map((item) => (
              <div
                key={item.key}
                className={`rounded-xl border p-4 flex items-center justify-between gap-3 ${surfaceCard}`}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 min-w-0 group"
                >
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${subSurface}`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[11px] font-mono ${mutedText}`}>{item.label}</div>
                    <div className="text-xs sm:text-sm font-mono font-semibold truncate group-hover:text-emerald-500 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(item.key, item.value)}
                  aria-label={`Copy ${item.label}`}
                  className={`p-2 rounded-lg border shrink-0 transition-colors cursor-pointer ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-emerald-400'
                      : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-emerald-600'
                  }`}
                >
                  {copiedKey === item.key ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        className={`relative z-10 border-t ${
          isDark ? 'border-zinc-800 bg-zinc-950/90' : 'border-zinc-200 bg-white/90'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <span className={mutedText}>{t.contact.rights}</span>
          <button
            type="button"
            onClick={() => setTerminalOpen(true)}
            className="text-emerald-500 hover:underline cursor-pointer"
          >
            {t.hero.ctaTerminal}
          </button>
        </div>
      </footer>

      {terminalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setTerminalOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-zinc-700 bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs text-zinc-400">{t.terminal.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setTerminalOpen(false)}
                className="text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 h-72 overflow-y-auto space-y-3 text-xs leading-relaxed">
              <div className="text-emerald-400">{t.terminal.welcome}</div>
              <div className="text-zinc-500">{t.terminal.hint}</div>

              {terminalHistory.map((entry, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-cyan-400">
                    <span className="text-emerald-500">$</span> {entry.cmd}
                  </div>
                  {entry.output.map((line, lIdx) => (
                    <div key={lIdx} className="text-zinc-300 pl-3 whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <div className="px-4 py-2 border-t border-zinc-800/80 bg-zinc-900/60 flex flex-wrap gap-1.5">
              {[
                'help',
                'projects',
                'qa',
                'stack',
                'cv',
                'pixelstore',
                'yozenspa',
                'github',
                'linkedin',
                'theme'
              ].map((quick) => (
                <button
                  key={quick}
                  type="button"
                  onClick={() => executeTerminalCommand(quick)}
                  className="px-2 py-1 rounded bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-300 text-[11px] text-zinc-300 transition-colors cursor-pointer"
                >
                  {quick}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeTerminalCommand(terminalInput);
              }}
              className="px-4 py-3 border-t border-zinc-800 bg-zinc-900 flex items-center gap-2"
            >
              <span className="text-emerald-400 text-sm">$</span>
              <input
                ref={terminalInputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder={t.terminal.placeholder}
                className="w-full bg-transparent text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}