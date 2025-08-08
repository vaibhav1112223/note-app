export function formatDate(date){
    return date.toLocaleDateString("een-us",{
        month:"short",
        day:"numeric",
        year:"numeric",
    })
}