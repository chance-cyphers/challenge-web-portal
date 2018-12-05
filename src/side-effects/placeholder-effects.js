export function fetchData(max) {
    return fetch(`https://www.random.org/integers/?num=1&min=1&max=${max}&col=1&base=10&format=plain&rnd=new`)
        .then((response) => response.json());
}