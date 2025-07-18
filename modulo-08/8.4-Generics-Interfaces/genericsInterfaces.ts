export{};

// Exemplo 01 - Generic Interfaces
interface FetchResponde<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}

async function fetchJson<T>(url: string): Promise<FetchResponde<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {};

    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();

    return {
        data: data as T, // o dado tá especificado como genérico
        status: response.status,
        statusText: response.statusText,
        headers
    };
}

(async () => {
    const response = await fetchJson<{ title: string }>("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.title);
})();