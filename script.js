

async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=b49cb976-5b66-4d27-90c4-b1a4662fa6ed&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status !== "success") return;

            const matchList = data.data;

            if (!matchList) return [];

            const relevantData = matchList
                .map(match => `${match.name}, ${match.status}`);

            console.log({ relevantData });

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;
        })
        .catch(e => console.log(e));
}

getMatchData();

// .filter(match => match.series_id == "489be47a-7e10-4bf1-9aad-201b67f45bf8")