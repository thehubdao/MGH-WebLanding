import Image from "next/image";
import Card from "../../components/card.component";
import { CardProjectInterface } from "../../interfaces/data.interface";
import { CardForm } from "../../enums/common.enum";

interface ProjectCardUIProps {
  projects: CardProjectInterface[];
}

export default function ProjectCardUI({ projects }: ProjectCardUIProps) {
  return (
    <>
      {
        projects.map((project, index) => (
          <div key={index}>
            <Card imageUrl={project.imageUrl} altImages={project.tag} url={project.url} form={CardForm.Vertical}>
              <div className="flex px-5 h-full justify-between items-center">
                <div>
                  <Image src={project.metaverseLogo} width={100} height={100} alt={project.tag} className="rounded-full p-3 bg-lm_gray" />
                </div>
                <div className="text-end">
                  <h1 className="font-neue text-sm text-lm_gray font-bold uppercase">{project.tag}</h1>
                  <p className="font-neue text-2xl sm:text-4xl text-lm_icons font-bold uppercase" dangerouslySetInnerHTML={{ __html: project.title }}></p>
                </div>
              </div>
            </Card>
          </div>
        ))
      }
    </>
  )
}