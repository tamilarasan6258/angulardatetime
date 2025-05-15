// server.ts (Netlify-compatible with AngularAppEngine)
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // Optional: Define API endpoints here
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/expenses') {
  //   return Response.json({ /* your hardcoded JSON data here */ });
  // }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * Required by Angular CLI and Netlify build process
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
