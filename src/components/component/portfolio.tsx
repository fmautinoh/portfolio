
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"
import ModalContact from "@/components/component/modalcontact"
import Image from 'next/image';

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-9 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Fernando Mautino&apos;s Portfolio</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 px-[10%]">
          <div className="container px-4 md:px-16 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Fernando Renzo Mautino Huerta</h1>
              <p className="text-muted-foreground md:text-xl">
                Desarrollador backend apasionado en la construcción de aplicaciones escalables y eficientes.
              </p>
              <ModalContact></ModalContact>
            </div>
            <div className="">
              <Image
                src="/programador.gif"
                width={400}
                height={400}
                alt="Rz"
                className="mx-auto rounded-full"
                style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted px-[10%]">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="text-muted-foreground md:text-xl">
                Dominio de diversas tecnologías y marcos de trabajo de backend.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <CodeIcon className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-lg font-semibold">Desarrollo Backend Web</h3>
                <p className="text-muted-foreground text-sm">
                  Experiencia en la creación de aplicaciones escalables y eficientes utilizando JavaScript, Typescript y c# - ASP.Net Core para la creación de REST/API.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <DatabaseIcon className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-lg font-semibold">SQL</h3>
                <p className="text-muted-foreground text-sm">
                  Dominio del diseño y la optimización de bases de datos relacionales con MS SQL Server, MySQL y Posgresql.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <CloudIcon className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-lg font-semibold">MS Windows Server - Azure</h3>
                <p className="text-muted-foreground text-sm">
                  Experiencia en despliegue y gestión de aplicaciones en MS Windows Server con Azure.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <TerminalIcon className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-lg font-semibold">Docker</h3>
                <p className="text-muted-foreground text-sm">
                  Experiencia con Docker para la contenedorización, creación y gestión de imágenes y contenedores Docker,y uso de Docker Compose para aplicaciones multicontenedor.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-[10%]">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="text-muted-foreground md:text-xl">
                Una selección de proyectos en los que he trabajado para mostrar mis habilidades.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Control de documentos administrativos</CardTitle>
                  <CardDescription>
                    Se diseñó un REST/API para conectar el Frontend y la Base de Datos, usando JWT y Bycript para el login y manejo de autenticaciones al API.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Typescript</Badge>
                    <Badge variant="secondary">Postgresql</Badge>
                    <Badge variant="secondary">Node JS</Badge>
                    <Badge variant="secondary">JWT</Badge>
                  </div>
                  <div className="flex item-center py-3">
                    <Badge variant="default">
                      <Link href="https://github.com/fmautinoh/Back-ts.git" target="_blank">
                        Ver Repositorio de Github
                      </Link>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventariado de Biblioteca</CardTitle>
                  <CardDescription>
                    Se diseñó un REST/API para conectar el Frontend y la Base de Datos, usando JWT y Argon2 para el login y manejo de autenticaciones al API.
                  </CardDescription>
                  <CardDescription>
                    Control de Inventario de Biblioteca Escolar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">C# - ASP.Net Core</Badge>
                    <Badge variant="secondary">MS SQL Server</Badge>
                    <Badge variant="secondary">JWT</Badge>
                  </div>
                  <div className="flex item-center py-3">
                    <Badge variant="default">
                      <Link href="https://github.com/fmautinoh/Back-ts.git" target="_blank">
                        Ver Repositorio de Github
                      </Link>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted px-[10%]">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
              <p className="text-muted-foreground md:text-xl">
                Certificaciones que he obtenido para validar mis competencias y conocimientos.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Auto Aprendizaje a partir de plataformas con video clases o asistencia a talleres.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Docker</CardTitle>
                  <CardDescription>
                    Conocimientos basicos y avanzados de orquestación de Contenedores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Deploy</Badge>
                    <Badge variant="secondary">Development</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Typescript</CardTitle>
                  <CardDescription>
                    Valida el conocimiento de los fundamentos y las mejores prácticas del lenguaje de programación Typescript.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Typescript</Badge>
                    <Badge variant="secondary">Programming</Badge>
                    <Badge variant="secondary">Certification</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Proyectos con KANBAN</CardTitle>
                  <CardDescription>
                    Demuestra comprensión la gestión ágil de proyectos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Kanban</Badge>
                    <Badge variant="secondary">Scrum</Badge>
                    <Badge variant="secondary">Agile</Badge>
                    <Badge variant="secondary">Project Management</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Fernando Renzo Mautino Huerta. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://www.linkedin.com/in/fernando-mautino-huerta-1a15602a0" target="_blank" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            LinkedIn
          </Link>
          <Link href="https://github.com/fmautinoh" target="_blank" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function TerminalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  )
}
function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

