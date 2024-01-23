import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de Teste I',
        p: '7COMM Informática LTDA | Jul de 2023 - Present',
      },
      text: '<p>Experiência na construção e manutenção de telas no ambiente AWB (Ambiente Web Bradesco) utilizando Jsf.</p> <p>Treinamento para projeto com Linguagem Angular utilizando Typescript.</p>'
    },
    {
      summary: {
        strong: 'Analista de Sistemas de Automação',
        p: 'Prime It Solutions | Out de 2022 - Mar de 2023'
      },
      text: '<p>Experiência na construção e manutenção de telas no ambiente AWB (Ambiente Web Bradesco) utilizando Java, Jsp, Javascript, Css e Html. Simulação de cenários de erros e bugs para correção e ajustes no sistema. Participação em dailys para acompanhamento das atividades.</p>'
    },
  ])
}
