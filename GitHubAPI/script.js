const githubApiUrl = "https://api.github.com/repos/";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ownerInput = document.querySelector("#owner");
    const repoInput = document.querySelector("#repo");
    const issuesContainer = document.querySelector("#issues");

    fetch(`${githubApiUrl}${ownerInput.value}/${repoInput.value}/issues`)
        .then(response => response.json())
        .then(data => {
            issuesContainer.innerHTML = "";
            data.map(issue => {
                const issueCard = document.createElement("div");
                issueCard.className = "card";

                const issueUser = document.createElement("img");
                issueUser.src = issue.user.avatar_url;
                issueUser.alt = issue.user.login;
                issueUser.className = "avatar";

                const issueUserLink = document.createElement("a");
                issueUserLink.href = issue.user.html_url;

                const issueTitle = document.createElement("h3");
                issueTitle.textContent = issue.title;

                const issueNumber = document.createElement("p");
                issueNumber.textContent = `Issue #${issue.number}:`;

                const issueLink = document.createElement("a");
                issueLink.textContent = "Link to Issue";
                issueLink.href = issue.html_url;

                issueCard.appendChild(issueUserLink);
                issueUserLink.appendChild(issueUser);
                issueCard.appendChild(issueTitle);
                issueCard.appendChild(issueNumber);
                issueCard.appendChild(issueLink);

                issuesContainer.appendChild(issueCard);
            });
        });
});
