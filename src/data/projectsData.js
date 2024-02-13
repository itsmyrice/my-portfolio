import gamedalf from "../assets/projects/gamedalf.png"
import rickAndMorty from "../assets/projects/rick-and-morty.png";
import musicCollection from "../assets/projects/music-collection.png";

/* The path to the imageSrc is not working! */

export const projectsData = [
  {
    title: "GameDalf",
    skills: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "MongoDB"],
    imageSrc: gamedalf,
    link: "https://gamedalf.vercel.app",
  },
  {
    title: "Rick and Morty",
    skills: ["HTML5", "CSS", "JavaScript", "React"],
    imageSrc: rickAndMorty,
    link: "https://rick-and-morty-by-gm.vercel.app",
  },
  {
    title: "Music Collection",
    skills: ["HTML5", "CSS", "JavaScript", "React"],
    imageSrc: musicCollection,
    link: "https://gloryann-music-collection.vercel.app",
  }
];