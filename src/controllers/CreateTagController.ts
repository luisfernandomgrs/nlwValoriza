import { Request, response, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
  async handle(request: Request, response: Response) {
    /**
     * mesmo que:
     * const data = request.body;
     * const name = data.name;
     */
    const { name } = request.body;
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
};

export { CreateTagController };