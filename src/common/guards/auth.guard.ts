import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        // Simplified logic: Check for generic Authorization header
        // In production, integrate with Passport / JWT strategy
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('No token provided');
        }
        return true; // Assume valid for scaffolding demo
    }
}
