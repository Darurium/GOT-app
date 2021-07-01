class GotService {

    async getResource(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch url: ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
}



getResource('https://jsonplaceholder.typicode.com/posts/1000')
    .then((res) => console.log("Success", res))
    .catch((error) => console.error("Error", error));