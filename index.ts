import figlet from "figlet";

const port = process.env['PORT'] || 3000;

const server = Bun.serve({
    port,
    fetch(req) {
        const url = new URL(req.url);
        
        if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
            return new Response(Bun.file(import.meta.dir + "/pages/index.html"));    
        }

        return new Response(figlet.textSync("Bun Shop Simulator"));
        
    }
});

console.log(`Running Bun version ${Bun.version}, listening on http://localhost:${server.port}...`);