// code your solution here
function saturdayFun(Event = "roller-skate"){
    return `This Saturday, I want to ${Event}!`
    }
    let mondayWork = function(Event = "go to the office"){
        return `This Monday, I will ${Event}.`
    }
    let wrapAdjective = function(Event = "*"){
        return function(adjective = "hard"){
            return `You are ${Event}${adjective}${Event}!`
        }

}