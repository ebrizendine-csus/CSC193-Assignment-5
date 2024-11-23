function makeTextBigger()
{
    document.getElementById("text").style.fontSize = "24pt";
}

function changeTextStyle()
{
    const fancyRadio = document.getElementById("fancy");
    const textArea = document.getElementById("text");

    if(fancyRadio.checked)
    {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        alert("FancyShmancy");
    }
    else
    {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        alert("BoringBetty");
    }
}

function moo()
{
    const textArea = document.getElementById("text");
    text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    sentences = sentences.map((sentence, index) =>
    {
        if (sentence.trim().length > 0 && index < sentences.length - 1)
        {
            let words = sentence.trim().split(" ");
            words[words.length - 1] += "-Moo";
            return words.join(" ");
        }
        return sentence.trim();
    });

    textArea.value = sentences.join(". ").trim();
}