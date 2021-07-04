import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    /**
     * Abaixo está uma forma de adicionar propriedades 
     * para um objeto e implementar extensões...
     * 
        let tags = await tagsRepositories.find();
        tags = tags.map((tag) => ({
          ...tag,
          nameCustom: `#${tag.name}`
        }));
     */

    /**
     * implementado implementação acima através da class-transformer, dentro de Entities | tags.ts
     * @Expose({ name: "nameCustom" })
     * além de importar neste include, classToPlain :)
    */
    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  };
};

export { ListTagsService };