import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  /*
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `[Middleware] Incoming Request: ${req.method} ${req.originalUrl}`,
    );
    next();
  }*/

  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
    const { method, url } = req;

    this.logger.log(`[Incoming Request] ${method} ${url}`);
    res.on('finish', () => {
      this.logger.log(
        `[Outgoing Response] ${method} ${url} - Status: ${res.statusCode}`,
      );
    });

    next();
  }
}
