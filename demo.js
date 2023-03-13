import Gist from "./gist.js";

document.getElementById("id1").addEventListener("click", function () {
    let gist_id1 = "335b41c561e25a372b913a8698bdcdca";
    Gist.get({ type: Gist.type.getGist, gist_id: gist_id1 })
})
document.getElementById("id2").addEventListener("click", function () {
    Gist.get({ type: Gist.type.getGists })
})
document.getElementById("id3").addEventListener("click", function () {
    Gist.get({ type: Gist.type.getStarredGists })
})

document.getElementById("id4").addEventListener("click", function () {
    let gist_id1 = "335b41c561e25a372b913a8698bdcdca";
    let sha1 = "bb91943594f69dba3e48db2a47a51a137620f4d1";
    Gist.get({ type: Gist.type.getGistHistory, gist_id: gist_id1, sha: sha1 })
})

document.getElementById("id5").addEventListener("click", function () {
    content = {
        "description": "The description for this gist",
        "public": true,
        "files": {
            "test1.py": {
                "content": "print(\"Hello World\")"
            }
        }
    }
    Gist.post({ type: Gist.type.createGist, content: content })
})

document.getElementById("id6").addEventListener("click", function () {
    content = {
        "description": "The description for this gist",
        "public": true,
        "files": {
            "test1.py": {
                "content": "print(\"Hi there\")"
            }
        }
    }
    id = "999a2b3b6f20e7645eaacc4efb80b091"
    Gist.patch({ type: Gist.type.updateGist, content: content, gist_id: id })
})

document.getElementById("id7").addEventListener("click", function () {
    id = "999a2b3b6f20e7645eaacc4efb80b091"
    Gist.delete({ type: Gist.type.deleteGist, gist_id: id })
})

document.getElementById("id8").addEventListener("click", function () {
    id = "999a2b3b6f20e7645eaacc4efb80b091";
    Gist.put({ type: Gist.type.starGist, gist_id: id })
})

document.getElementById("id9").addEventListener("click", function () {
    id = "999a2b3b6f20e7645eaacc4efb80b091";
    Gist.delete({ type: Gist.type.unStarGist, gist_id: id })
})