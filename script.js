const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch url: ${url}, status: ${res.status}`);
    }

    const some = await res.json();

    return some;
}

getResource('https://jsonplaceholder.typicode.com/posts/1000')
    .then((res) => console.log("Success", res))
    .catch((error) => console.error("Error", error));