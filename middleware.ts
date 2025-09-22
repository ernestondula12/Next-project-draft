import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
//Nesta seção, estamos a definir as rotas públicas que não requerem autenticação.
const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);

// Middleware to protect routes
//Nesta seção, estamos a criar o middleware que protege as rotas.
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

// Configure the matcher to apply middleware to all routes except static files and API routes
//Nesta sessão, estamos a dizer ao middleware para proteger todas as rotas, exceto as que são públicas (definidas na variável isPublicRoute), 
//bem como arquivos estáticos e rotas de API.
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};