import { Request, response, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(userAdmin);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
