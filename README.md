# GitHub Gist API Encapsulation

[API Doc](https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28)

# How to use

1. Get your GitHub access token

https://github.com/settings/tokens

2. Modify `GIST_TOKEN` in `gist.js`
3. import class gist to your project

```js
import Gist from "./gist.js";
```



# Functions Ref

### Get a gist

```JavaScript
let gist_id1 = "335b41c561e25a372b913a8698bdcdca";
Gist.get({ type: Gist.type.getGist, gist_id: gist_id1 })
```



### Get all gists

```JavaScript
Gist.get({ type: Gist.type.getGists })
```



### Get all starred gists

```JavaScript
Gist.get({ type: Gist.type.getStarredGists })
```



## Get a gist revision

```JavaScript
let gist_id1 = "335b41c561e25a372b913a8698bdcdca";
let sha1 = "bb91943594f69dba3e48db2a47a51a137620f4d1";
Gist.get({ type: Gist.type.getGistHistory, gist_id: gist_id1, sha: sha1 })
```



### Create a gist

```js
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
```



### Update a gist

```JavaScript
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
```



### Delete a gist

```JavaScript
id = "999a2b3b6f20e7645eaacc4efb80b091"
Gist.delete({ type: Gist.type.deleteGist, gist_id: id })
```



### Star a gist

```JavaScript
id = "999a2b3b6f20e7645eaacc4efb80b091";
Gist.put({ type: Gist.type.starGist, gist_id: id })
```



### Unstart a gist

```JavaScript
id = "999a2b3b6f20e7645eaacc4efb80b091";
Gist.delete({ type: Gist.type.unStarGist, gist_id: id })
```

