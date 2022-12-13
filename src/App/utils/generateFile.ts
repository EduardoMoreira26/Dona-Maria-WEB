import { JobFormProps } from "../types/jobFom.types";

export function generateFile(form: JobFormProps) {
  let windowReport = window.open("", "", "width=1200,height=1200");

  windowReport?.document.write("<html><head>");
  windowReport?.document.write("<title>Dona Maria</title></head>");
  windowReport?.document.write("<body>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<h1>Título da vaga: ");
  windowReport?.document.write(form.title);
  windowReport?.document.write("</h1>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<span>Atividades que o cargo exerce: ");
  windowReport?.document.write(form.activities);
  windowReport?.document.write("</span>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<span>Salário: R$ ");
  windowReport?.document.write(form.wage.toString());
  windowReport?.document.write("</span>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<span>Benefícios: ");
  windowReport?.document.write(form.benefits);
  windowReport?.document.write("</span>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<span>Etapas do processo: ");
  windowReport?.document.write(form.processSteps);
  windowReport?.document.write("</span>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<span>Habilidades necessárias: ");
  windowReport?.document.write(form.skills);
  windowReport?.document.write("</span>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("<span>Experiência necessária: ");
  windowReport?.document.write(form.requirements);
  windowReport?.document.write("</span>");
  windowReport?.document.write("<br><br>");

  windowReport?.document.write("</body></html>");
  windowReport?.document.close();
  windowReport?.print();
}
