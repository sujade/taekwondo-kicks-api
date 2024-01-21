document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const kickName = document.querySelector('input').value
    try {
        const response = await fetch(`/api/${kickName}`)
        const data = await response.json()

        if(data.error === true) {
            alert('Invalid technique name!')
        } else {
            console.log(data)
            document.querySelector('#name').innerText = ' ' + data.foundKick.name
            document.querySelector('#korean').innerText = ' ' + data.foundKick.koreanName
            document.querySelector('#instructions').innerText = ' ' + data.foundKick.instruction
            document.querySelector('#tips').innerText = ' ' + data.foundKick.tips
            document.querySelector('#random').innerText = "Check other techniques like" + ' ' + data.randomKick + ' ' + "as well!"
        }

    } catch (error) {
        console.log(error)
    }
}