import fundamentosWeb from "/src/assets/projects/fundamentos-web.png";
import stickerNotes from "/src/assets/projects/sticker-notes.png";

export const projects = [
    {
        title: "Fundamentos da Web",
        summary: "Projetos da matéria de Fundamentos da Web no CEFET/RJ.",
        image: fundamentosWeb,
        link: "https://anabeatrizfrez.github.io/fundamentos-web/git-cefet/",
        color: "#6366f1",
        stacks: [
            { name: "HTML", icon: "html5-plain" },
            { name: "CSS", icon: "css3-plain" },
            { name: "JavaScript", icon: "javascript-plain" }
        ],
    },
    {
        title: "App de Notas Adesivas",
        summary: "Aplicativo desktop de notas adesivas para a escrita de lembretes rápidos de tarefas e ideias.",
        image: stickerNotes,
        link: "https://github.com/anabeatrizfrez/sticker-notes",
        color: "#e100ff",
        stacks: [
            { name: "Python", icon: "python-plain" }
        ],
    },
];
