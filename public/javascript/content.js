function getSteps() {
    const response = fetch("/api/posts/:id", {
        method: "GET",
        body: JSON.parse({
            steps
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const steps = response
    } else {
        alert(response.statusText);
    }

    console.log(response);
}