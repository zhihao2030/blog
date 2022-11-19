export default function registerPlugin(app) {
    const modules = import.meta.glob('./*.js');
    for (const path in modules) {
        const result = path.match(/.*\/(.+).js$/);
        if (result) {
            console.log(result)
            //const name = result[1];
            const plugin = modules[path];
            app.use(plugin)
        }
    }
}
