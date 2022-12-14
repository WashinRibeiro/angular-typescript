// Chamar função que desejamos
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    }
}

@apiVersion("1.10")
class Api {
    __version: any;
}

const api = new Api();
console.log(api.__version);