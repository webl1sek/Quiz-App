const groot = document.getElementById('root');
const qIndex = document.getElementsByClassName('answerItem')
// Number of question in arr

const qObject = [
    {
        question: 'Is it rains outside?',
        answers: ['It rains outside', 'It doesnt rain outside', 'No idea'],
        correctAnswer: 'No idea'
    },
    {
        question: 'Is it windy outside?',
        answers: ['It is', 'It isnt', 'No idea'],
        correctAnswer: 'No idea'
    },
    {
        question: '3Is it windy outside?',
        answers: ['It is', 'It isnt', 'No idea'],
        correctAnswer: 'No idea'
    },
]

function main(qObject) {

    let answArr = []
    let qNumber = 0
    let counter = 0

    if (qObject.length > qNumber) {

        function formQuestion(number = qNumber) { 
            
            if (qObject.length > qNumber) {
             let qHTML = qObject[number].answers.map(function (item, index) {
                    return `
                            <span class='answerItem' data-index="${index}">${item}</span>
                        `}).join('')

                let html = `
                        <span class='counter'>Question ${qNumber + 1 + '/' + qObject.length}</span>
                        <h1>  ${qObject[number].question}</h1>
                        ${qHTML}
                        `
                groot.innerHTML = html
                setListener()
            }
        
            if (answArr.length == qObject.length) {
                for (i = 0; i < qObject.length; i++){
                    if (qObject[i].answers[answArr[i]] === qObject[i].correctAnswer) {
                        counter++
                    } 
            }   
                groot.innerHTML = `
                <h1 class='result'>You scored ${counter + '/' + qNumber}</h1>
                <span class='answerItem result' id='retryBtn'>Retry?</span>
                `

                document.getElementById('retryBtn').onclick = function () {
                    qNumber = 0;
                    main(qObject)
                }
            }    
        }
        formQuestion()

        function setListener() {
            for (item of qIndex) {
                item.addEventListener('click', captureSwitch)
            }
        }

        function captureSwitch() {
            if (qObject.length > qNumber) {
                answArr.push(this.dataset.index)
                qNumber++
                formQuestion(qNumber)
            }
        }
    }   
}

document.onload = main(qObject)



