export const fetcharticles = async () => {
    const response = await fetch(`http://localhost:3000/articles`);
    const data = await response.json();
    return data;
};

