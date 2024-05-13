function startClassification()
{
    navigator.mediaDevices.getUserMedia
    (
        {
            audio: true
        }
    );
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Q1P2VhETw/", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
        img1 = document.getElementById('animal1');
        img2 = document.getElementById('animal2');
        img3 = document.getElementById('animal3');
        img4 = document.getElementById('animal4');
        if (results[0].label == "Barking")
        {
            img1.src = 'Cat.gif';
            img2.src = 'Dog.jpg';
            img3.src = 'Lion.jpeg';
            img4.src = 'Cow.jpg';
        }
        else if (result[0].label == "Meowing")
        {
            img1.src = 'Cat.jpeg';
            img2.src = 'Dog.gif';
            img3.src = 'Lion.jpeg';
            img4.src = 'Cow.jpg';
        }
        else if (result[0].label == "Roaring")
        {
            img1.src = 'Cat.jpeg';
            img2.src = 'Dog.jpg';
            img3.src = 'Lion.gif';
            img4.src = 'Cow.jpg';
        }
        else if (result[0].label == "Mooing")
        {
            img1.src = 'Cat.jpeg';
            img2.src = 'Dog.jpg';
            img3.src = 'Lion.jpeg';
            img4.src = 'Cow.gif';
        }
        else
        {
            img1.src = 'Cat.jpeg';
            img2.src = 'Dog.jpg';
            img3.src = 'Lion.jpeg';
            img4.src = 'Cow.jpg';
        }
    }
}