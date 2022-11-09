import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEcho(term: string): string {
    return 'Hello from Kubernetes: ' + term;
  }
}
