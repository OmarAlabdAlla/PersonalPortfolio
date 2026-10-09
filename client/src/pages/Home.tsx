import { useQuery } from "@tanstack/react-query"
import { PortfolioData } from "@shared/schema"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Download, ExternalLink, Calendar } from "lucide-react"
import profileImage from "@assets/profile.jpg"

export function Home() {
  const { data: portfolio, isLoading } = useQuery<PortfolioData>({
    queryKey: ["/api/portfolio"],
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading portfolio...</div>
      </div>
    )
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-500">Failed to load portfolio data</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center space-y-6">
            <img
              src={profileImage}
              alt={portfolio.personalInfo.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {portfolio.personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {portfolio.personalInfo.title}
              </p>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
                {portfolio.personalInfo.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href={`mailto:${portfolio.personalInfo.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={portfolio.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>{portfolio.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>{portfolio.personalInfo.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {portfolio.experience.map((exp) => (
              <Card key={exp.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {exp.company}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="text-muted-foreground">{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.education.map((edu) => (
              <Card key={edu.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {edu.institution}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.duration}
                  </div>
                  {edu.gpa && (
                    <div className="text-sm font-medium">GPA: {edu.gpa}</div>
                  )}
                </CardHeader>
                <CardContent>
                  {edu.description && (
                    <p className="text-muted-foreground mb-3">{edu.description}</p>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Selected Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.slice(0, 6).map((course, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {course}
                          </span>
                        ))}
                        {edu.coursework.length > 6 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            +{edu.coursework.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.skills.map((skillCategory, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Languages</h2>
          <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
            {portfolio.languages.map((lang, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{lang.language}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{lang.proficiency}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">References</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {portfolio.references.map((ref) => (
              <Card key={ref.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{ref.name}</CardTitle>
                  <CardDescription>{ref.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{ref.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm">{ref.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 {portfolio.personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}