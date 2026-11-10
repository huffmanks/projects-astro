import { writeFile } from "node:fs/promises";

import { type Project, featuredProjects, repoProjects } from "../src/data/projects";

const README_PATH = new URL("../README.md", import.meta.url);
const IMAGE_BASE_URL = "./public";

function generateProject(project: Project): string {
  const lines = [`### ${project.title}`, ""];

  if (project.imgSrc) {
    lines.push(`![Screenshot of ${project.title}](${IMAGE_BASE_URL}${project.imgSrc})`, "");
  }

  lines.push(project.description, "");

  if (project.repoLink) {
    lines.push(`- [Repo](${project.repoLink})`);
  }

  if (project.demoLink) {
    const label = project.supportsAndroid
      ? "APK"
      : project.isDesign
        ? "Design"
        : project.isVSCode
          ? "Extension"
          : project.isDocker
            ? "Image"
            : "Demo";

    lines.push(`- [${label}](${project.demoLink})`);
  }

  return lines.join("\n");
}

async function main(): Promise<void> {
  const projects = [...featuredProjects, ...repoProjects].map(generateProject).join("\n\n");

  const readme = [
    "# Portfolio website",
    "",
    "[View portfolio](https://huffmanks.com)",
    "",
    "## Projects",
    "",
    projects,
    "",
  ].join("\n");

  await writeFile(README_PATH, readme, "utf8");

  console.log("README.md generated successfully.");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
