document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const kickName = document.querySelector('input').value
    try {
        const response = await fetch(`/api/${kickName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#name').innerText = ' ' + data.name
        document.querySelector('#korean').innerText = ' ' + data.koreanName
        document.querySelector('#instructions').innerText = ' ' + data.instruction
        document.querySelector('#tips').innerText = ' ' + data.tips
    } catch (error) {
        console.log(error)
    }
}