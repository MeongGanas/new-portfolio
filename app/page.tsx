import About from "@/components/about";
import Contact from "@/components/contact";
import Copyright from "@/components/copyright";
import Home from "@/components/home";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Copyright />
    </main>
  );
}
