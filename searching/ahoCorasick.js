"use strict"
// Aho Corasick

let adjList = []
 
function initTrie(keywords) {
    // creates a trie of keywords, then sets fail transitions
    createEmptyTrie()
    addKeywords(keywords)
    setFailTransitions()
}

function createEmptyTrie() {
    // initalize the root of the trie
    adjList.push( {
        'value':'',
        'nextStates':[],
        'failState':0,
        'output':[]
    })
}

function addKeywords(keywords) {
    // add all keywords in list of keywords
    for(let keyword of keywords){
        addKeyword(keyword)
    }
}

function findNextState(currentState, value) {
    for(let node of adjList[currentState]["nextStates"]){
        if(adjList[node]["value"] == value){
            return node
        }
    }
    return null
}

function addKeyword(keyword) {
    // add a keyword to the trie and mark output at the last node
    let currentState = 0
    let j = 0
    keyword = keyword.toLowerCase()
    let child = findNextState(currentState, keyword[j])

    while (child !== null) {
        currentState = child
        j+=1
        if (j<keyword.length) {
            child = findNextState(currentState, keyword[j])
        } else{
            break
        }
    }

    for (let i = j; i < keyword.length; i++) {
        let node = {'value':keyword[i],'nextStates':[],'failState':0,'output':[]}
        adjList.push(node)
        adjList[currentState]["nextStates"].push(adjList.length - 1)
        currentState = adjList.length - 1
    }
    adjList[currentState]["output"].push(keyword)
}

function setFailTransitions() {
    let q = []
    // let child = 0
    for(let node of adjList[0]["nextStates"]){
        q.push(node)
        adjList[node]["failState"] = 0
    }

    while (q.length>0) {
        let r = q.shift()
        for(let child of adjList[r]["nextStates"]){
            q.push(child)
            let state = adjList[r]["failState"]
            while ( (findNextState(state, adjList[child]["value"]) == null) && (state != 0) ) {
                state = adjList[state]["failState"]
            }
            adjList[child]["failState"] = findNextState(state, adjList[child]["value"])
            
            if(adjList[child]["failState"] === null){
                adjList[child]["failState"] = 0
            }
            adjList[child]["output"] = adjList[child]["output"].concat( adjList[adjList[child]["failState"]]["output"] )
        }
    }
}

function getKeywordsFound(line) {
    // returns true if line contains any keywords in trie
    line = line.toLowerCase()
    let currentState = 0
    let keywordsFound = []

    for (let i = 0; i < line.length; i++) {
        while (findNextState(currentState, line[i]) === null && currentState !==0 ) {
            currentState = adjList[currentState]["failState"]
        }
        currentState = findNextState(currentState, line[i])

        if(currentState === null){
            currentState = 0
        }else{
            for(let j of adjList[currentState]["output"]){
                keywordsFound.push({"index":i-j.length + 1,"word":j})
            }
        }
    }
    return keywordsFound
}

initTrie(['a', 'ab', 'bc', 'bca', 'c', 'caa'])
// console.log(adjList)
console.log(getKeywordsFound("abccab"))
