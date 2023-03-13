import Gist from "./gist.js";

let textArea = document.querySelector("textarea");

document.getElementById("id1").addEventListener("click", function () {
    let gist_id1 = "335b41c561e25a372b913a8698bdcdca";
    Gist.get({ type: Gist.type.getGist, gist_id: gist_id1 }).then((data) => {
        textArea.value = JSON.stringify(data, null, 4);
    })
})
document.getElementById("id2").addEventListener("click", function () {
    Gist.get({ type: Gist.type.getGists }).then((data) => {
        textArea.value = JSON.stringify(data, null, 4);
    })
})
document.getElementById("id3").addEventListener("click", function () {
    Gist.get({ type: Gist.type.getStarredGists }).then((data) => {
        textArea.value = JSON.stringify(data, null, 4);
    })
})

document.getElementById("id4").addEventListener("click", function () {
    let gist_id1 = "335b41c561e25a372b913a8698bdcdca";
    let sha1 = "bb91943594f69dba3e48db2a47a51a137620f4d1";
    Gist.get({ type: Gist.type.getGistHistory, gist_id: gist_id1, sha: sha1 }).then((data) => {
        textArea.value = JSON.stringify(data, null, 4);
    })
})

document.getElementById("id5").addEventListener("click", function () {
    let content = {
        "description": "The description for this gist",
        "public": true,
        "files": {
            "test1.py": {
                "content": "print(\"Hello World\")"
            }
        }
    }
    Gist.post({ type: Gist.type.createGist, content: content }).then((data) => {
        textArea.value = JSON.stringify(data, null, 4);
    })
})

document.getElementById("id6").addEventListener("click", function () {
    let content = {
        "description": "The description for this gist",
        "public": true,
        "files": {
            "test1.py": {
                "content": "print(\"Hi there\")"
            }
        }
    }
    let id = "999a2b3b6f20e7645eaacc4efb80b091"
    Gist.patch({ type: Gist.type.updateGist, content: content, gist_id: id }).then((data) => {
        textArea.value = JSON.stringify(data, null, 4);
    })
})

document.getElementById("id7").addEventListener("click", function () {
    let id = "999a2b3b6f20e7645eaacc4efb80b091"
    Gist.delete({ type: Gist.type.deleteGist, gist_id: id }).then((data) => {
        textArea.value = data;
    })
})

document.getElementById("id8").addEventListener("click", function () {
    let id = "999a2b3b6f20e7645eaacc4efb80b091";
    Gist.put({ type: Gist.type.starGist, gist_id: id }).then((data) => {
        textArea.value = data;
    })
})

document.getElementById("id9").addEventListener("click", function () {
    let id = "999a2b3b6f20e7645eaacc4efb80b091";
    Gist.delete({ type: Gist.type.unStarGist, gist_id: id }).then((data) => {
        textArea.value = data;
    })
})

window.onload = function () {
    let GIST_TOKEN = localStorage.getItem("GIST_TOKEN");
    if (GIST_TOKEN) {
        Gist.headers.Authorization = `Bearer ${GIST_TOKEN}`
    } else {
        Gist.GIST_TOKEN = prompt("Please Enter Your GIST_TOKEN");
        Gist.headers.Authorization = `Bearer ${GIST_TOKEN}`
        localStorage.setItem("GIST_TOKEN", Gist.GIST_TOKEN);
        window.location.reload();
    }
}