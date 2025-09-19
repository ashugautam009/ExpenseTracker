export const genrateRandomNo=()=>{
    let min=10;
    let max=100;
    const NewNumber=Math.floor(Math.random()*(max-min+1)+min)
    return NewNumber
}