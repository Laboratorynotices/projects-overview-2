import { Project } from "~/types/project.types";

export default defineEventHandler(async (): Promise<Project[]> => {
  // Здесь в будущем будет логика получения данных из БД
  // Пока используем те же моковые данные
  const projects: Project[] = [
    {
      name: "Vogelsberg",
      url: "https://google.com",
      description:
        "Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. ",
      technologies: ["Vue.js", "html5"],
    },
    {
      name: "Steinhaufen",
      url: "https://google.de",
      description:
        "Aha-hu-ha ahu uha. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. Uhu-hu-hu uhu uhu. ",
      technologies: ["cakephp", "html5"],
    },
    {
      name: "Wassertahl",
      url: "https://google.at",
      description: "Tropf-Tropf, Tropf, Tropf, Tropf-Tropf. Tropf.",
      technologies: ["yii2", "html5"],
    },
  ];

  return projects;
});
